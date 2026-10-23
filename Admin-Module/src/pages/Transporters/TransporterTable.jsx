import DataTable from "react-data-table-component";
import { MdEditNote, MdDelete } from "react-icons/md";

const tableStyles = {
    headRow: { style: { minHeight: "48px", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" } },
    headCells: { style: { color: "#475569", fontSize: "12px", fontWeight: 600 } },
    rows: { style: { minHeight: "58px", color: "#334155", fontSize: "13px" }, highlightOnHoverStyle: { backgroundColor: "#f8fafc" } },
    pagination: { style: { borderTop: "1px solid #e2e8f0", color: "#64748b" } },
};

function TransporterTable({ transporters }) {
    const columns = [
        { name: "ID", selector: row => row.transporter_id, sortable: true },
        { name: "Transporter", selector: row => row.transporter_name, sortable: true },
        { name: "Email", selector: row => row.email },
        { name: "Phone", selector: row => row.mobile_number },
        { name: "Role", selector: row => row.role },
        { name: "Company", selector: () => "—" },
        { name: "Vehicles", selector: () => "—" },
        { name: "Location", selector: () => "—" },
        {
            name: "Status",
            selector: row => row.account_status,
            cell: row => (
                <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${row.account_status === "ACTIVE"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-slate-100 text-slate-600"
                        }`}
                >
                    {row.account_status}
                </span>
            ),
        },
        {
            name: "Created At",
            selector: row => new Date(row.created_at).toLocaleDateString(),
            sortable: true,
        },
        {
            name: "Action",
            cell: () => (
                <div className="flex items-center gap-2">
                    <button
                        className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-700 transition hover:bg-blue-100"
                        title="Edit"
                    >
                        <MdEditNote size={18} />
                    </button>
                    <button
                        className="flex h-9 w-9 items-center justify-center rounded-md bg-rose-50 text-rose-600 transition hover:bg-rose-100"
                        title="Delete"
                    >
                        <MdDelete size={18} />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <DataTable
                columns={columns}
                data={transporters}
                customStyles={tableStyles}
                pagination
                highlightOnHover
                responsive
                persistTableHead
                noDataComponent={<div className="py-10 text-sm text-slate-500">No transporters found.</div>}
            />
        </div>
    );
}

export default TransporterTable;
