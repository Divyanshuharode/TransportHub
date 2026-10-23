import DataTable from "react-data-table-component";

const tableStyles = {
    headRow: { style: { minHeight: "48px", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" } },
    headCells: { style: { color: "#475569", fontSize: "12px", fontWeight: 600 } },
    rows: { style: { minHeight: "58px", color: "#334155", fontSize: "13px" }, highlightOnHoverStyle: { backgroundColor: "#f8fafc" } },
    pagination: { style: { borderTop: "1px solid #e2e8f0", color: "#64748b" } },
};

const bookings = [
    { id: "BK-501", customer: "Aarav Sharma", transporter: "Mehta Logistics", pickup: "Delhi", drop: "Jaipur", vehicle: "Tata Ace", date: "Oct 20, 2026", status: "Confirmed" },
    { id: "BK-502", customer: "Meera Patel", transporter: "SK Transport", pickup: "Jaipur", drop: "Agra", vehicle: "Eicher Pro 2049", date: "Oct 20, 2026", status: "Pending" },
    { id: "BK-503", customer: "Kabir Verma", transporter: "Rao Roadways", pickup: "Mumbai", drop: "Pune", vehicle: "Ashok Leyland Dost", date: "Oct 19, 2026", status: "In Transit" },
    { id: "BK-504", customer: "Anaya Singh", transporter: "NorthStar Cargo", pickup: "Chandigarh", drop: "Delhi", vehicle: "Mahindra Bolero", date: "Oct 18, 2026", status: "Completed" },
    { id: "BK-505", customer: "Ishaan Gupta", transporter: "Mehta Logistics", pickup: "Delhi", drop: "Lucknow", vehicle: "BharatBenz 1217", date: "Oct 17, 2026", status: "Cancelled" },
];

function Bookings() {
    const columns = [
        {
            name: "Booking ID",
            selector: row => row.id,
            sortable: true,
        },
        {
            name: "Customer",
            selector: row => row.customer,
            sortable: true,
        },
        {
            name: "Transporter",
            selector: row => row.transporter,
            sortable: true,
        },
        {
            name: "Route",
            selector: row => `${row.pickup} → ${row.drop}`,
            sortable: true,
        },
        {
            name: "Vehicle",
            selector: row => row.vehicle,
            sortable: true,
        },
        {
            name: "Date",
            selector: row => row.date,
            sortable: true,
        },
        {
            name: "Status",
            selector: row => row.status,
            cell: row => {
                let statusColor = "bg-blue-50 text-blue-700";

                if (row.status === "Pending") statusColor = "bg-amber-50 text-amber-700";
                if (row.status === "In Transit") statusColor = "bg-indigo-50 text-indigo-700";
                if (row.status === "Completed") statusColor = "bg-emerald-50 text-emerald-700";
                if (row.status === "Cancelled") statusColor = "bg-rose-50 text-rose-700";

                return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusColor}`}>{row.status}</span>;
            },
        },
        {
            name: "Action",
            cell: () => (
                <div className="flex gap-2">
                    <button className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-100">
                        View
                    </button>
                    <button className="rounded-md bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-600 transition hover:bg-rose-100">
                        Cancel
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-full bg-slate-50 p-4 sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Operations</p>
                    <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">Bookings</h1>
                    <p className="mt-1 text-sm text-slate-500">Manage and track customer shipments.</p>
                </div>
                <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                    + Add booking
                </button>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Total bookings</p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900">5</h2>
                </div>
                <div className="rounded-xl border border-amber-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Pending</p>
                    <h2 className="mt-2 text-3xl font-bold text-amber-600">1</h2>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">In transit</p>
                    <h2 className="mt-2 text-3xl font-bold text-indigo-700">1</h2>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Completed</p>
                    <h2 className="mt-2 text-3xl font-bold text-emerald-700">1</h2>
                </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h2 className="mb-4 text-base font-semibold text-slate-900">Booking status</h2>
                    <div className="space-y-4 text-sm">
                        <div className="flex justify-between">
                            <span className="text-slate-600">Confirmed</span>
                            <span className="font-semibold text-slate-900">1</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">Pending</span>
                            <span className="font-semibold text-slate-900">1</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">In transit</span>
                            <span className="font-semibold text-slate-900">1</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">Cancelled</span>
                            <span className="font-semibold text-slate-900">1</span>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <h2 className="mb-4 text-base font-semibold text-slate-900">Recent bookings</h2>
                    <div className="space-y-3 text-sm">
                        <p className="flex justify-between gap-3">
                            <span className="text-slate-600">BK-501 · Delhi to Jaipur</span>
                            <span className="font-medium text-blue-700">Confirmed</span>
                        </p>
                        <p className="flex justify-between gap-3">
                            <span className="text-slate-600">BK-502 · Jaipur to Agra</span>
                            <span className="font-medium text-amber-700">Pending</span>
                        </p>
                        <p className="flex justify-between gap-3">
                            <span className="text-slate-600">BK-503 · Mumbai to Pune</span>
                            <span className="font-medium text-indigo-700">In transit</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
                    <h2 className="text-base font-semibold text-slate-900">Booking list</h2>
                    <p className="mt-1 text-xs text-slate-500">5 bookings in the system</p>
                </div>
                <DataTable
                    columns={columns}
                    data={bookings}
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

export default Bookings;
