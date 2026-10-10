import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import moment from "moment";

import UserViewModal from "./UserViewModal";
import UserUpdateModal from "./UserUpdateModal";
import UserAddModal from "./UserAddModal";

import { HiOutlineArchive } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { AiFillEye } from "react-icons/ai";

import { getRoles } from "../../services/role.service";
import {
    getUsers,
    addUser as addUserApi,
    deleteUser as deleteUserApi,
    updateUserStatus,
    updateUser as updateUserApi
} from "../../services/user.service";

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

            await fetchUsers();
            setUpdateOpen(false);
        } catch (err) {
            console.log(err);
        }
    };

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
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={item.account_status === "Active"}
                        onChange={() => updateStatusHandler(item)}
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
                </label>
            )
        },
        {
            name: "Created At",
            selector: item => moment(item.created_at).format("MMMM D YYYY, h:mm:ss a"),
            sortable: true,
        },
        {
            name: "Action",
            cell: item => (
                <div className="flex gap-2 h-8.5">
                    {/* View */}
                    <button
                        className="bg-blue-500 text-white w-9 flex items-center justify-center px-2 py-1 rounded hover:bg-blue-600"
                        onClick={() => openViewModal(item.user_id)}
                    >
                        <AiFillEye />
                    </button>

                    {/* Edit */}
                    <button
                        className="bg-green-500 text-white w-9 flex items-center justify-center px-2 py-1 rounded hover:bg-green-600"
                        onClick={() => openUpdateModal(item)}
                    >
                        <CiEdit />
                    </button>

                    {/* Delete */}
                    <button
                        className="bg-red-500 text-white w-9 flex items-center justify-center px-2 py-1 rounded hover:bg-red-600"
                        onClick={() => deleteuser(item.user_id)}
                    >
                        <HiOutlineArchive />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h2 className="text-2xl font-bold">Users</h2>
                    <p className="text-gray-500">Manage all users</p>
                </div>

                <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded"
                    onClick={openmodal}
                >
                    + Add User
                </button>
            </div>

            <DataTable
                columns={columns}
                data={users}
                pagination
                highlightOnHover
                striped
                responsive
                theme="dark"
            />

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

