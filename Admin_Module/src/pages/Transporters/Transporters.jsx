import DataTable from "react-data-table-component";

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
        },
        {
            name: "Action",
            cell: row => (
                <div className="flex gap-3">
                    <button className="text-indigo-600">
                        Edit
                    </button>

                    <button className="text-red-600">
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    const transporters = [];

    return (
        <div className="p-6">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">

                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Transporters
                    </h1>

                    <p className="text-gray-500">
                        Manage transporters and their fleet
                    </p>
                </div>

                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    + Add Transporter
                </button>

            </div>


            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

                <div className="bg-white p-5 rounded-xl shadow-sm">
                    <p className="text-gray-500 text-sm">
                        Total Transporters
                    </p>

                    <h2 className="text-2xl font-bold mt-2">
                        0
                    </h2>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm">
                    <p className="text-gray-500 text-sm">
                        Active Transporters
                    </p>

                    <h2 className="text-2xl font-bold text-green-600 mt-2">
                        0
                    </h2>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm">
                    <p className="text-gray-500 text-sm">
                        Total Vehicles
                    </p>

                    <h2 className="text-2xl font-bold text-indigo-600 mt-2">
                        0
                    </h2>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm">
                    <p className="text-gray-500 text-sm">
                        Vehicles On Route
                    </p>

                    <h2 className="text-2xl font-bold text-orange-500 mt-2">
                        0
                    </h2>
                </div>

            </div>


            {/* Vehicle Status + Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">

                {/* Vehicle Status */}
                <div className="bg-white rounded-xl shadow-sm p-5">

                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        Vehicle Status
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                🟢 Available
                            </span>

                            <span className="font-semibold">
                                0
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                🟡 On Route
                            </span>

                            <span className="font-semibold">
                                0
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                🔴 Maintenance
                            </span>

                            <span className="font-semibold">
                                0
                            </span>
                        </div>

                    </div>

                </div>


                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm p-5">

                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        Recent Activity
                    </h2>

                    <div className="space-y-4 text-sm">

                        <p className="text-gray-500">
                            No recent activity
                        </p>

                    </div>

                </div>

            </div>


            {/* Transporter Table */}
            <div className="bg-white rounded-xl shadow-sm">

                <DataTable
                    title="Transporter List"
                    columns={columns}
                    data={transporters}
                    pagination
                    highlightOnHover
                    responsive
                    persistTableHead
                />

            </div>

        </div>
    );
}

export default Transporters;