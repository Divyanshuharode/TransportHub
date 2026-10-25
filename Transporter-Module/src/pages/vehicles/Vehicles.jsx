import { Truck, Plus, Edit, Trash2, Fuel, Weight, CheckCircle, FileText, Clock } from "lucide-react";

const Vehicles = () => {
    const vehicles = [
        { id: 1, name: "Tata Ace", number: "MP09 AB 1234", type: "Mini Truck", capacity: "750 kg", status: "Active" },
        { id: 2, name: "Tata 407", number: "MP04 CD 5678", type: "Light Truck", capacity: "2.5 Ton", status: "Active" },
        { id: 3, name: "Ashok Leyland", number: "MP09 EF 9012", type: "Heavy Truck", capacity: "10 Ton", status: "Inactive" },
    ];

    return (
        <div className="space-y-2 p-1">

            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">My Vehicles</h1>
                    {/* <p className="mt-1 text-sm text-gray-500">Manage your registered transport vehicles.</p> */}
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white">
                    <Plus size={18} /> Add Vehicle
                </button>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-white p-2">
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">Total Documents</p>
                        <FileText size={16} className="text-blue-600" />
                    </div>
                    <h2 className="mt-1 text-xl font-bold text-gray-900">04</h2>
                    <p className="mt-0.5 text-xs text-gray-500">Uploaded documents</p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-2">
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">Verified Documents</p>
                        <CheckCircle size={16} className="text-green-600" />
                    </div>
                    <h2 className="mt-1 text-xl font-bold text-gray-900">02</h2>
                    <p className="mt-0.5 text-xs text-gray-500">Successfully verified</p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-2">
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">Pending Documents</p>
                        <Clock size={16} className="text-yellow-600" />
                    </div>
                    <h2 className="mt-1 text-xl font-bold text-gray-900">01</h2>
                    <p className="mt-0.5 text-xs text-gray-500">Awaiting verification</p>
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="border-b border-gray-200 p-5">
                    <h2 className="text-lg font-semibold text-gray-900">Vehicle List</h2>
                    <p className="mt-1 text-sm text-gray-500">View your registered vehicles and their status.</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                            <tr>
                                <th className="px-5 py-4">Vehicle</th>
                                <th className="px-5 py-4">Vehicle Number</th>
                                <th className="px-5 py-4">Type</th>
                                <th className="px-5 py-4">Capacity</th>
                                <th className="px-5 py-4">Status</th>
                                <th className="px-5 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {vehicles.map((vehicle) => (
                                <tr key={vehicle.id} className="hover:bg-gray-50">
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="rounded-lg bg-blue-50 p-2.5 text-blue-600">
                                                <Truck size={22} />
                                            </div>
                                            <span className="font-semibold text-gray-800">{vehicle.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 font-medium text-gray-600">{vehicle.number}</td>
                                    <td className="px-5 py-4 text-gray-600">{vehicle.type}</td>
                                    <td className="px-5 py-4 text-gray-600">{vehicle.capacity}</td>
                                    <td className="px-5 py-4">
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${vehicle.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                                            {vehicle.status}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            <button className="text-blue-600"><Edit size={17} /></button>
                                            <button className="text-red-500"><Trash2 size={17} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Vehicles;