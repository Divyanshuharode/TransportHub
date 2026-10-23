import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import moment from "moment";

import UserViewModal from "./UserViewModal";
import UserUpdateModal from "./UserUpdateModal";
import UserAddModal from "./UserAddModal";

import { HiOutlineArchive } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { AiFillEye } from "react-icons/ai";
import { TiUserAdd } from "react-icons/ti";

import { FaUsers, FaUserCheck, FaUserTimes } from "react-icons/fa";

import { getRoles } from "../../services/role.service";
import {
    getUsers,
    addUser as addUserApi,
    deleteUser as deleteUserApi,
    updateUserStatus,
    updateUser as updateUserApi
} from "../../services/user.service";
import Swal from "sweetalert2";

const tableStyles = {
    headRow: { style: { minHeight: "48px", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" } },
    headCells: { style: { color: "#475569", fontSize: "12px", fontWeight: 600 } },
    rows: { style: { minHeight: "60px", color: "#334155", fontSize: "13px" }, highlightOnHoverStyle: { backgroundColor: "#f8fafc" } },
    pagination: { style: { borderTop: "1px solid #e2e8f0", color: "#64748b" } },
};

export default function Users() {
    const [users, setUsers] = useState([]);
    const [allRoles, setallRoles] = useState([]);
    const [Role, setRole] = useState("");
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [pass, setpass] = useState();
    const [open, setOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [updateUserId, setUpdateUserId] = useState(null);
    const [viewOpen, setViewOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [search, setSearch] = useState("");
    // const [roleFilter, setRoleFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    const openmodal = () => {
        fetchRoles();
        setOpen(true);
    };

    // GET users
    const fetchUsers = async () => {
        try {
            const res = await getUsers();
            setUsers(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    // GET roles
    const fetchRoles = async () => {
        try {
            const res = await getRoles();
            setallRoles(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUsers();
        // fetchRoles();
    }, []);

    // ADD user
    const addUser = async () => {
        try {
            await addUserApi({
                full_name: name,
                email: email,
                password: pass,
                role_id: Role
            });

            await Swal.fire({
                icon: "success",
                title: "user added duccessfully",
                text: "view userList",
                confirmButtonText: "ok"
            })
            await fetchUsers();

            setOpen(false);
        } catch (err) {
            console.log(err);
        }
    };

    // DELETE user
    const deleteuser = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            await deleteUserApi(id);
            await fetchUsers();
        } catch (err) {
            console.log(err);
        }
    };

    // UPDATE status
    const updateStatusHandler = async (item) => {
        const newStatus = item.account_status === "Active" ? "Inactive" : "Active";

        try {
            await updateUserStatus(item.user_id, { account_status: newStatus });
            await fetchUsers();
        } catch (err) {
            console.log(err);
        }
    };

    // OPEN update modal
    function openUpdateModal(item) {
        setUpdateUserId(item.user_id);
        setname(item.full_name);
        setemail(item.email);
        setRole(item.role_id || "");
        setpass("");
        fetchRoles();
        setUpdateOpen(true);
    }

    function openViewModal(uid) {
        setSelectedUserId(uid);
        setViewOpen(true);
    }

    // UPDATE user
    const updateUser = async () => {
        try {
            await updateUserApi(updateUserId, {
                full_name: name,
                email: email,
                password: pass,
                role_id: Role
            });
            await Swal.fire({
                icon: "success",
                title: "Update Information",
                confirmButtonText: "ok"
            })

            await fetchUsers();
            setUpdateOpen(false);
        } catch (err) {
            console.log(err);
        }
    };
    // ------ filter ---
    // const filteredUsers = users.filter(item => (item.full_name + item.email).toLowerCase().includes(search.toLowerCase()));
    const filteredUsers = users.filter((item) => {
        const matchesSearch = (item.full_name + item.email).toLowerCase().includes(search.toLowerCase());
        // const matchesRole = roleFilter === "" || String(item.role_id) === roleFilter;
        const matchesStatus = statusFilter === "" || item.account_status === statusFilter;

        return matchesSearch && matchesStatus;
    });
    // ------ users cards value 
    const totalUsers = users.length;
    const activeUsers = users.filter(item => item.account_status === "Active").length;
    const inactiveUsers = users.filter(item => item.account_status === "Inactive").length;

    // DataTable columns
    const columns = [
        {
            name: "ID",
            selector: (item, index) => index + 1,
            sortable: true,
            width: "80px",
        },
        {
            name: "Name",
            selector: item => item.full_name,
            cell: item => <span className="font-medium text-slate-800">{item.full_name}</span>,
            sortable: true,
        },
        {
            name: "Email",
            selector: item => item.email,
            sortable: true,
        },
        {
            name: "Status",
            selector: item => item.account_status,
            cell: item => (
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer accent-blue-600"
                        checked={item.account_status === "Active"}
                        onChange={() => updateStatusHandler(item)}
                    // aria-label={`Set ${item.full_name} status`}  
                    />
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${item.account_status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                        {item.account_status}
                    </span>
                </div>
            )
        },
        {
            name: "Created At",
            selector: item => moment(item.created_at).format("MMM D, YYYY · h:mm a"),
            sortable: true,
        },
        {
            name: "Action",
            cell: item => (
                <div className="flex items-center gap-2">
                    <button
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-blue-700 transition hover:bg-blue-100"
                        onClick={() => openViewModal(item.user_id)}
                        title="View user"
                        aria-label="View user"
                    >
                        <AiFillEye />
                    </button>
                    <button
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-50 text-emerald-700 transition hover:bg-emerald-100"
                        onClick={() => openUpdateModal(item)}
                        title="Edit user"
                        aria-label="Edit user"
                    >
                        <CiEdit />
                    </button>
                    <button
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-rose-50 text-rose-600 transition hover:bg-rose-100"
                        onClick={() => deleteuser(item.user_id)}
                        title="Delete user"
                        aria-label="Delete user"
                    >
                        <HiOutlineArchive />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-full bg-slate-50 p-4 sm:p-6 lg:p-4">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="mt-1 text-1xl font-bold tracking-tight text-slate-900">Users</h1>
                </div>

                <button
                    className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 flex items-center justify-center gap-2"
                    onClick={openmodal}
                >
                    <TiUserAdd />  Add
                </button>
            </div>

            <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3">
                    <div>
                        <p className="text-xs font-medium text-slate-500">Total users</p>
                        <h2 className="mt-1 text-2xl font-bold text-slate-900">{totalUsers}</h2>
                    </div>
                    <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                        <FaUsers size={18} />
                    </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3">
                    <div>
                        <p className="text-xs font-medium text-slate-500">Active users</p>
                        <h2 className="mt-1 text-2xl font-bold text-slate-900">{activeUsers}</h2>
                    </div>
                    <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600">
                        <FaUserCheck size={18} />
                    </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3">
                    <div>
                        <p className="text-xs font-medium text-slate-500">Inactive users</p>
                        <h2 className="mt-1 text-2xl font-bold text-slate-900">{inactiveUsers}</h2>
                    </div>
                    <div className="rounded-lg bg-rose-100 p-2 text-rose-600">
                        <FaUserTimes size={18} />
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                    {/* <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
                        <option value="">All roles</option>
                        {allRoles.map((role) => (
                            <option key={role.role_id} value={role.role_id}>{role.role_name}</option>
                        ))}
                    </select> */}

                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                        <option value="">All statuses</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Search by name or email"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm"
                    />
                </div>
                <DataTable
                    columns={columns}
                    data={filteredUsers}
                    customStyles={tableStyles}
                    pagination
                    highlightOnHover
                    responsive
                    noDataComponent={<div className="py-10 text-sm text-slate-500">No users found. Add a user to get started.</div>}
                />
            </div>

            <UserAddModal
                open={open}
                setOpen={setOpen}
                name={name}
                setname={setname}
                email={email}
                setemail={setemail}
                pass={pass}
                setpass={setpass}
                allRoles={allRoles}
                Role={Role}
                setRole={setRole}
                addUser={addUser}
            />

            <UserViewModal
                open={viewOpen}
                setOpen={setViewOpen}
                userId={selectedUserId}
            />

            <UserUpdateModal
                open={updateOpen}
                setOpen={setUpdateOpen}
                name={name}
                setname={setname}
                email={email}
                setemail={setemail}
                pass={pass}
                setpass={setpass}
                Role={Role}
                setRole={setRole}
                allRoles={allRoles}
                updateUser={updateUser}
                UserId={updateUserId}
            />
        </div>
    );
}

