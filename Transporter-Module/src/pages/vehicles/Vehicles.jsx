import { useState, useEffect } from "react";
import { Truck, Plus, Edit, Trash2, Eye } from "lucide-react";
import { getVehiclesApi } from "../../services/vehicles.service";
import VehicleCards from "./Vehicles.cards";
import VehicleDetailsModal from "./Vehicles.viewModel";

const Vehicles = () => {
    const [vehicless, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const getVehicleInfo = async () => {
        const res = await getVehiclesApi();
        // const
        setVehicles(res.data.data);
        console.log(res.data.data);
    };

    useEffect(() => {
        getVehicleInfo();
    }, []);

    return (
        <div className="space-y-2 p-1">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">My Vehicles</h1>
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white">
                    <Plus size={18} /> Add Vehicle
                </button>
            </div>

            <VehicleCards />

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="border-b border-gray-200 p-5">
                    <h2 className="text-lg font-semibold text-gray-900">Vehicle List</h2>
                    <p className="mt-1 text-sm text-gray-500">View your registered vehicles and their status.</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                            <tr>
                                <th className="px-5 py-4">Vehicle Number</th>
                                <th className="px-5 py-4">Vehicle Type</th>
                                <th className="px-5 py-4">Capacity</th>
                                <th className="px-5 py-4">Status</th>
                                <th className="px-5 py-4">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {vehicless.map((vehicle) => (
                                <tr key={vehicle.vehicle_id} className="hover:bg-gray-50">
                                    <td className="px-5 py-4 font-medium text-gray-600">{vehicle.vehicle_number}</td>
                                    <td className="px-5 py-4 text-gray-600">{vehicle.vehicle_type}</td>
                                    <td className="px-5 py-4 text-gray-600">{vehicle.capacity}</td>
                                    <td className="px-5 py-4">
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${vehicle.status === "Available" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                                            {vehicle.status}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => setSelectedVehicle(vehicle)} className="text-blue-600" title="View Details">
                                                <Eye size={17} />
                                            </button>
                                            <button className="text-blue-600" title="Edit">
                                                <Edit size={17} />
                                            </button>
                                            <button className="text-red-500" title="Delete">
                                                <Trash2 size={17} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <VehicleDetailsModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
        </div>
    );
};

export default Vehicles;