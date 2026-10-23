import DataTable from "react-data-table-component";

const tableStyles = {
    headRow: { style: { minHeight: "48px", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" } },
    headCells: { style: { color: "#475569", fontSize: "12px", fontWeight: 600 } },
    rows: { style: { minHeight: "58px", color: "#334155", fontSize: "13px" }, highlightOnHoverStyle: { backgroundColor: "#f8fafc" } },
    pagination: { style: { borderTop: "1px solid #e2e8f0", color: "#64748b" } },
};

const inventoryItems = [
    { id: "INV-101", name: "Engine Oil", category: "Vehicle supplies", quantity: 42, unit: "Litre", location: "Delhi Depot", status: "In Stock" },
    { id: "INV-102", name: "Truck Tyre", category: "Spare parts", quantity: 8, unit: "Pieces", location: "Jaipur Depot", status: "Low Stock" },
    { id: "INV-103", name: "First Aid Kit", category: "Safety equipment", quantity: 26, unit: "Kits", location: "Mumbai Depot", status: "In Stock" },
    { id: "INV-104", name: "Reflective Vest", category: "Safety equipment", quantity: 0, unit: "Pieces", location: "Delhi Depot", status: "Out of Stock" },
    { id: "INV-105", name: "Brake Pad Set", category: "Spare parts", quantity: 18, unit: "Sets", location: "Chandigarh Depot", status: "In Stock" },
];

function Inventory() {
    const columns = [
        {
            name: "Item ID",
            selector: row => row.id,
            sortable: true,
        },
        {
            name: "Item",
            selector: row => row.name,
            cell: row => <span className="font-medium text-slate-800">{row.name}</span>,
            sortable: true,
        },
        {
            name: "Category",
            selector: row => row.category,
            sortable: true,
        },
        {
            name: "Quantity",
            selector: row => `${row.quantity} ${row.unit}`,
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

                if (row.status === "Low Stock") statusColor = "bg-amber-50 text-amber-700";
                if (row.status === "Out of Stock") statusColor = "bg-rose-50 text-rose-700";

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
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Operations</p>
                    <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">Inventory</h1>
                    <p className="mt-1 text-sm text-slate-500">Keep track of supplies, spare parts and stock levels.</p>
                </div>
                <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                    + Add item
                </button>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Total items</p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900">5</h2>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">In stock</p>
                    <h2 className="mt-2 text-3xl font-bold text-emerald-700">3</h2>
                </div>
                <div className="rounded-xl border border-amber-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Low stock</p>
                    <h2 className="mt-2 text-3xl font-bold text-amber-600">1</h2>
                </div>
                <div className="rounded-xl border border-rose-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Out of stock</p>
                    <h2 className="mt-2 text-3xl font-bold text-rose-600">1</h2>
                </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
                    <h2 className="text-base font-semibold text-slate-900">Inventory list</h2>
                    <p className="mt-1 text-xs text-slate-500">5 items across your depots</p>
                </div>
                <DataTable
                    columns={columns}
                    data={inventoryItems}
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

export default Inventory;
