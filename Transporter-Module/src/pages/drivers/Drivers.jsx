import { Users, CheckCircle, Clock, Plus, Eye, Edit } from "lucide-react";

const Drivers = () => {
    const drivers = [
        { id: 1, name: "Rahul Sharma", phone: "9876543210", license: "MP0920200012345", vehicle: "MP09 AB 1234", status: "Active" },
        { id: 2, name: "Amit Verma", phone: "9876543211", license: "MP0420210056789", vehicle: "MP04 CD 5678", status: "Active" },
        { id: 3, name: "Rohit Patel", phone: "9876543212", license: "MP0920220098765", vehicle: "Not Assigned", status: "Inactive" },
    ];

    return (
        <div className="space-y-2 p-1">

            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Drivers</h1>
                    {/* <p className="mt-1 text-sm text-gray-500">Manage your drivers and their vehicle assignments.</p> */}
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                    <Plus size={17} /> Add Driver
                </button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">Total Drivers</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">03</h2>
                    </div>
                    <Users size={20} className="text-blue-600" />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">Active Drivers</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">02</h2>
                    </div>
                    <CheckCircle size={20} className="text-green-600" />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">Inactive Drivers</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">01</h2>
                    </div>
                    <Clock size={20} className="text-amber-600" />
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 p-4">
                    <div>
                        <h2 className="font-semibold text-gray-900">Driver List</h2>
                        <p className="mt-1 text-xs text-gray-500">View driver details and assigned vehicles.</p>
                    </div>

                    <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-500">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                            <tr>
                                <th className="px-4 py-3">Driver</th>
                                <th className="px-4 py-3">Phone</th>
                                <th className="px-4 py-3">License Number</th>
                                <th className="px-4 py-3">Assigned Vehicle</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {drivers.map((driver) => (
                                <tr key={driver.id} className="hover:bg-gray-50">
                                    <td className="whitespace-nowrap px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 font-semibold text-blue-600">
                                                {driver.name.charAt(0)}
                                            </div>
                                            <span className="font-medium text-gray-800">{driver.name}</span>
                                        </div>
                                    </td>

                                    <td className="whitespace-nowrap px-4 py-4 text-gray-600">{driver.phone}</td>
                                    <td className="whitespace-nowrap px-4 py-4 text-gray-600">{driver.license}</td>
                                    <td className="whitespace-nowrap px-4 py-4 text-gray-600">{driver.vehicle}</td>

                                    <td className="whitespace-nowrap px-4 py-4">
                                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${driver.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                                            {driver.status}
                                        </span>
                                    </td>

                                    <td className="whitespace-nowrap px-4 py-4">
                                        <div className="flex items-center gap-2">
                                            <button title="View Driver" className="rounded-md border border-gray-200 p-2 text-gray-600 hover:bg-gray-100">
                                                <Eye size={16} />
                                            </button>
                                            <button title="Edit Driver" className="rounded-md border border-gray-200 p-2 text-blue-600 hover:bg-blue-50">
                                                <Edit size={16} />
                                            </button>
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

export default Drivers;