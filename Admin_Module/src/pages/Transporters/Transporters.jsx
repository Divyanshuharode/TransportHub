import DataTable from "react-data-table-component";

const tableStyles = {
    headRow: { style: { minHeight: "48px", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" } },
    headCells: { style: { color: "#475569", fontSize: "12px", fontWeight: 600 } },
    rows: { style: { minHeight: "58px", color: "#334155", fontSize: "13px" }, highlightOnHoverStyle: { backgroundColor: "#f8fafc" } },
    pagination: { style: { borderTop: "1px solid #e2e8f0", color: "#64748b" } },
};

const transporters = [
    { id: 201, name: "Rohan Mehta", company: "Mehta Logistics", phone: "+91 98765 11111", vehicles: 4, location: "Delhi", status: "Active" },
    { id: 202, name: "Simran Kaur", company: "SK Transport", phone: "+91 98765 22222", vehicles: 3, location: "Jaipur", status: "Active" },
    { id: 203, name: "Arjun Rao", company: "Rao Roadways", phone: "+91 98765 33333", vehicles: 2, location: "Mumbai", status: "Inactive" },
    { id: 204, name: "Neha Joshi", company: "NorthStar Cargo", phone: "+91 98765 44444", vehicles: 3, location: "Chandigarh", status: "Active" },
];

function Transporters() {
    const columns = [
        {
            name: "ID",
            selector: row => row.id,
            sortable: true,
        },
        {
            name: "Transporter",
            selector: row => row.name,
            sortable: true,
        },
        {
            name: "Company",
            selector: row => row.company,
            sortable: true,
        },
        {
            name: "Phone",
            selector: row => row.phone,
        },
        {
            name: "Vehicles",
            selector: row => row.vehicles,
            sortable: true,
        },
        {
            name: "Location",
            selector: row => row.location,
        },
        {
            name: "Status",
            selector: row => row.status,
            cell: row => (
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${row.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                    {row.status}
                </span>
            ),
        },
        {
            name: "Action",
            cell: () => (
                <div className="flex gap-2">
                    <button className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-100">
                        Edit
                    </button>
                    <button className="rounded-md bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-600 transition hover:bg-rose-100">
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-full bg-slate-50 p-4 sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Fleet management</p>
                    <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">Transporters</h1>
                    <p className="mt-1 text-sm text-slate-500">Manage transport partners and their fleet.</p>
                </div>
                <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                    + Add transporter
                </button>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Total transporters</p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900">4</h2>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Active transporters</p>
                    <h2 className="mt-2 text-3xl font-bold text-emerald-700">3</h2>
                </div>
                <div className="rounded-xl border border-blue-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Total vehicles</p>
                    <h2 className="mt-2 text-3xl font-bold text-blue-700">12</h2>
                </div>
                <div className="rounded-xl border border-amber-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Vehicles on route</p>
                    <h2 className="mt-2 text-3xl font-bold text-amber-600">5</h2>
                </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h2 className="mb-4 text-base font-semibold text-slate-900">Vehicle status</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Available</span>
                            <span className="font-semibold text-slate-900">7</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600">On route</span>
                            <span className="font-semibold text-slate-900">4</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Maintenance</span>
                            <span className="font-semibold text-slate-900">1</span>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h2 className="mb-4 text-base font-semibold text-slate-900">Recent activity</h2>
                    <div className="flex min-h-20 items-center justify-center rounded-lg bg-slate-50 text-sm text-slate-500">
                        No recent activity
                    </div>
                </div>
            </div>

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
        </div>
    );
}

export default Transporters;