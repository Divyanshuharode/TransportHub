import DataTable from "react-data-table-component";

const tableStyles = {
    headRow: { style: { minHeight: "48px", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" } },
    headCells: { style: { color: "#475569", fontSize: "12px", fontWeight: 600 } },
    rows: { style: { minHeight: "58px", color: "#334155", fontSize: "13px" }, highlightOnHoverStyle: { backgroundColor: "#f8fafc" } },
    pagination: { style: { borderTop: "1px solid #e2e8f0", color: "#64748b" } },
};

const vehicles = [
    { id: "VH-101", name: "Tata Ace", type: "Pickup", registration: "DL 01 AB 1234", transporter: "Mehta Logistics", location: "Delhi", status: "Available" },
    { id: "VH-102", name: "Eicher Pro 2049", type: "Light Truck", registration: "RJ 14 CD 5678", transporter: "SK Transport", location: "Jaipur", status: "On Route" },
    { id: "VH-103", name: "Ashok Leyland Dost", type: "Mini Truck", registration: "MH 02 EF 9012", transporter: "Rao Roadways", location: "Mumbai", status: "Maintenance" },
    { id: "VH-104", name: "Mahindra Bolero Pickup", type: "Pickup", registration: "CH 01 GH 3456", transporter: "NorthStar Cargo", location: "Chandigarh", status: "Available" },
    { id: "VH-105", name: "BharatBenz 1217", type: "Heavy Truck", registration: "DL 01 JK 7890", transporter: "Mehta Logistics", location: "Delhi", status: "On Route" },
];

function Vehicles() {
    const columns = [
        {
            name: "Vehicle ID",
            selector: row => row.id,
            sortable: true,
        },
        {
            name: "Vehicle",
            selector: row => row.name,
            sortable: true,
        },
        {
            name: "Type",
            selector: row => row.type,
            sortable: true,
        },
        {
            name: "Registration",
            selector: row => row.registration,
            sortable: true,
        },
        {
            name: "Transporter",
            selector: row => row.transporter,
            sortable: true,
        },
        {
            name: "Location",
            selector: row => row.location,
        },
        {
            name: "Status",
            selector: row => row.status,
            cell: row => {
                let statusColor = "bg-emerald-50 text-emerald-700";

                if (row.status === "On Route") statusColor = "bg-blue-50 text-blue-700";
                if (row.status === "Maintenance") statusColor = "bg-amber-50 text-amber-700";

                return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusColor}`}>{row.status}</span>;
            },
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
                    <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">Vehicles</h1>
                    <p className="mt-1 text-sm text-slate-500">Track fleet availability, location and maintenance.</p>
                </div>
                <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                    + Add vehicle
                </button>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Total vehicles</p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900">5</h2>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Available</p>
                    <h2 className="mt-2 text-3xl font-bold text-emerald-700">2</h2>
                </div>
                <div className="rounded-xl border border-blue-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">On route</p>
                    <h2 className="mt-2 text-3xl font-bold text-blue-700">2</h2>
                </div>
                <div className="rounded-xl border border-amber-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Maintenance</p>
                    <h2 className="mt-2 text-3xl font-bold text-amber-600">1</h2>
                </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
                    <h2 className="text-base font-semibold text-slate-900">Vehicle list</h2>
                    <p className="mt-1 text-xs text-slate-500">5 vehicles in the fleet</p>
                </div>
                <DataTable
                    columns={columns}
                    data={vehicles}
                    customStyles={tableStyles}
                    pagination
                    highlightOnHover
                    responsive
                    persistTableHead
                />
            </div>
        </div>
    );
}

export default Vehicles;
