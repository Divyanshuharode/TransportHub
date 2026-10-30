import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import moment from "moment";

import { FaEye } from "react-icons/fa";

import RoleUpdateModal from "./UpdateModal";
import RoleAddModal from "./AddModal";
import { CiEdit } from "react-icons/ci";
import {
    getRoles,
    addRole as addRoleApi,
    updateRole as updateRoleApi,
    // deleteRole as deleteRoleApi
} from "../../services/role.service";

const tableStyles = {
    headRow: { style: { minHeight: "48px", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" } },
    headCells: { style: { color: "#475569", fontSize: "12px", fontWeight: 600 } },
    rows: { style: { minHeight: "41px", color: "#334155", fontSize: "13px" }, highlightOnHoverStyle: { backgroundColor: "#f8fafc" } },
    pagination: { style: { borderTop: "1px solid #e2e8f0", color: "#64748b" } },
};

export default function Roles() {
    const [roles, setRoles] = useState([]);
    const [rname, setrname] = useState("");
    const [Rid, setRid] = useState("");
    const [Rname, setRname] = useState("");
    const [open, setOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);

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

    const addRole = async () => {
        try {
            await addRoleApi({ role_name: rname });
            await Swal.fire({
                icon: "success",
                title: "role added successfully",
                text: "view roleList",
                confirmButtonText: "ok",
            })
            fetchRoles();
            setrname("");
            setOpen(false);
        } catch (err) {
            console.log(err);
        }
    };

    async function updateRole(item) {
        setRid(item.role_id);
        setRname(item.role_name);
        setOpenUpdate(true);
    }

    const saveRole = async (id) => {
        try {
            await updateRoleApi(id, { role_name: Rname });
            await Swal.fire({
                icon: "success",
                title: "role updated successfully",
                text: "view roleList",
                confirmButtonText: "ok",
            })
            fetchRoles();
            setOpenUpdate(false);
            setRname("");
        } catch (err) {
            console.log(err);
        }
    };

    // const deleteRole = async (rid) => {
    //     const confirmDelete = window.confirm("Are you sure you want to delete this role?");
    //     if (!confirmDelete) return;
    //     try {
    //         await deleteRoleApi(rid);
    //         alert("Data deleted successfully");
    //         fetchRoles();
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

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
            cell: item => <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{item.role_name}</span>,
            sortable: true,
        },
        {
            name: "Created At",
            selector: item => moment(item.created_at).format("MMM D, YYYY · h:mm a"),
            sortable: true,
        },
        {
            name: "Action",
            cell: item => (
                <div className="flex gap-2">
                    <button className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-100" onClick={() => updateRole(item)}><CiEdit size={19} /></button>
                    {/* <button className="rounded-md bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-600 transition hover:bg-rose-100" onClick={() => deleteRole(item.role_id)}>Delete</button> */}
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-full bg-slate-50 p-4 sm:p-6 lg:p-4">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900">Roles</h1>
                    <p className="mt-1 text-xs text-slate-500">{roles.length} roles in the system</p>
                </div>
                <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700" onClick={() => setOpen(true)}>+ Add </button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <DataTable
                    columns={columns}
                    data={roles}
                    customStyles={tableStyles}
                    pagination
                    highlightOnHover
                    responsive
                    noDataComponent={<div className="py-10 text-sm text-slate-500">No roles found. Add a role to get started.</div>}
                />
            </div>
            <RoleAddModal open={open} setOpen={setOpen} rname={rname} setrname={setrname} addRole={addRole} />
            <RoleUpdateModal openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} Rid={Rid} Rname={Rname} setRname={setRname} saveRole={saveRole} />
        </div>
    );
}
