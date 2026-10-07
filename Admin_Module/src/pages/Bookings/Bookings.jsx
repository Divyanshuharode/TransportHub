import DataTable from "react-data-table-component";

function Booking() {

    const columns = [
        { name: "ID", selector: row => row.id, sortable: true },
        { name: "Customer", selector: row => row.customer, sortable: true },
        { name: "Transporter", selector: row => row.transporter, sortable: true },
        { name: "Route", selector: row => `${row.pickup} → ${row.drop}`, sortable: true },
        { name: "Vehicle", selector: row => row.vehicle, sortable: true },
        { name: "Date", selector: row => row.date, sortable: true },
        {
            name: "Status",
            cell: row => (
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-600">
                    {row.status}
                </span>
            ),
        },
        {
            name: "Action",
            cell: () => (
                <div className="flex gap-3">
                    <button className="text-blue-600">View</button>
                    <button className="text-red-600">Cancel</button>
                </div>
            ),
        },
    ];

    const bookings = [];

    return (
        <div className="p-6">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold">Bookings</h1>
                    <p className="text-gray-500">Manage and track all bookings</p>
                </div>

                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                    + Add Booking
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

                <div className="bg-white p-5 rounded-xl shadow">
                    <p className="text-gray-500">Total Bookings</p>
                    <h2 className="text-2xl font-bold mt-2">0</h2>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                    <p className="text-gray-500">Pending</p>
                    <h2 className="text-2xl font-bold text-yellow-600 mt-2">0</h2>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                    <p className="text-gray-500">In Transit</p>
                    <h2 className="text-2xl font-bold text-blue-600 mt-2">0</h2>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                    <p className="text-gray-500">Completed</p>
                    <h2 className="text-2xl font-bold text-green-600 mt-2">0</h2>
                </div>

            </div>

            {/* Booking Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

                <div className="bg-white p-5 rounded-xl shadow">
                    <h2 className="font-semibold text-lg mb-5">Booking Status</h2>

                    <div className="space-y-4">
                        <div className="flex justify-between"><span>🟢 Confirmed</span><b>0</b></div>
                        <div className="flex justify-between"><span>🟡 Pending</span><b>0</b></div>
                        <div className="flex justify-between"><span>🔵 In Transit</span><b>0</b></div>
                        <div className="flex justify-between"><span>🔴 Cancelled</span><b>0</b></div>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                    <h2 className="font-semibold text-lg mb-5">Recent Bookings</h2>

                    <div className="space-y-4 text-sm">
                        <p>• New booking created</p>
                        <p>• Booking confirmed</p>
                        <p>• Shipment moved to transit</p>
                    </div>
                </div>

            </div>

            {/* Booking List */}
            <div className="bg-white rounded-xl shadow">
                <DataTable
                    title="Booking List"
                    columns={columns}
                    data={bookings}
                    pagination
                    highlightOnHover
                    responsive
                    persistTableHead
                />
            </div>

        </div>
    );
}

export default Booking;