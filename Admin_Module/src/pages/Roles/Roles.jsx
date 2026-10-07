import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import moment from "moment";

import RoleUpdateModal from "./UpdateModal";
import RoleAddModal from "./AddModal";

import {
    getRoles,
    addRole as addRoleApi,
    updateRole as updateRoleApi,
    deleteRole as deleteRoleApi
} from "../../services/role.service";

export default function Roles() {
    const [roles, setRoles] = useState([]); // all roles
    const [rname, setrname] = useState("");
    const [Rid, setRid] = useState("");
    const [Rname, setRname] = useState("");
    const [open, setOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);

    // GET roles
    const fetchRoles = async () => {
        try {
            const res = await getRoles();
            setRoles(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchRoles();
    }, []);

    // ADD role
    const addRole = async () => {
        try {
            await addRoleApi({ role_name: rname });

            fetchRoles();
            setrname("");
            setOpen(false);
        } catch (err) {
            console.log(err);
        }
    };

    // Open update modal
    function updateRole(item) {
        setRid(item.role_id);
        setRname(item.role_name);
        setOpenUpdate(true);
    }

    // UPDATE role
    const saveRole = async (id) => {
        try {
            await updateRoleApi(id, { role_name: Rname });

            fetchRoles();
            setOpenUpdate(false);
            setRname("");
        } catch (err) {
            console.log(err);
        }
    };

    // DELETE role
    const deleteRole = async (rid) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this role?");

        if (!confirmDelete) return;

        try {
            await deleteRoleApi(rid);

            alert("Data deleted successfully");
            fetchRoles();
        } catch (err) {
            console.log(err);
        }
    };

    const columns = [
        {
            name: "ID",
            selector: (item, index) => index + 1,
            sortable: true,
            width: "80px",
        },
        {
            name: "Role Name",
            selector: item => item.role_name,
            sortable: true,
        },
        {
            name: "Created At",
            selector: item => moment(item.created_at).format("MMMM-D-YYYY, h:mm:ss a"),
            sortable: true,
        },
        {
            name: "Action",
            cell: item => (
                <div className="flex gap-10">
                    <button
                        className="bg-green-500 text-white px-2 w-15 py-1 rounded hover:bg-green-600"
                        onClick={() => updateRole(item)}
                    >
                        Edit
                    </button>

                    <button
                        className="bg-red-500 text-white px-2 py-1 w-15 h-8 rounded hover:bg-red-600"
                        onClick={() => deleteRole(item.role_id)}
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow">

            <div className="flex justify-between items-center mb-5">
                <div>
                    <h2 className="text-2xl font-bold">Roles</h2>
                    <p className="text-gray-400">Manage all roles</p>
                </div>

                <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                    onClick={() => setOpen(true)}
                >
                    + Add Role
                </button>
            </div>

            <DataTable
                columns={columns}
                data={roles}
                pagination
                highlightOnHover
                striped
                responsive
                theme="dark"
            />

            <RoleAddModal
                open={open}
                setOpen={setOpen}
                rname={rname}
                setrname={setrname}
                addRole={addRole}
            />

            <RoleUpdateModal
                openUpdate={openUpdate}
                setOpenUpdate={setOpenUpdate}
                Rid={Rid}
                setRid={setRid}
                Rname={Rname}
                setRname={setRname}
                saveRole={saveRole}
            />

        </div>
    );
}