import { X, Truck, Hash, Weight, UserRound, CalendarDays, Clock, ShieldCheck } from "lucide-react";

const VehicleDetailsModal = ({ vehicle, onClose }) => {
    if (!vehicle) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/60 p-4 backdrop-blur-sm">
            <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">

                <div className="flex items-center justify-between bg-gradient-to-r from-blue-700 to-indigo-600 px-6 py-5 text-white">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-white/20 p-3">
                            <Truck size={25} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold">Vehicle Details</h2>
                            <p className="mt-1 text-sm text-blue-100">Complete vehicle information</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="rounded-lg p-2 hover:bg-white/20">
                        <X size={22} />
                    </button>
                </div>

                <div className="p-6">
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
                        <div>
                            <p className="text-xs font-medium text-gray-500">Vehicle Number</p>
                            <h3 className="mt-1 text-lg font-bold uppercase text-gray-900">{vehicle.vehicle_number}</h3>
                        </div>
                        <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${vehicle.status === "Available" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"}`}>
                            {vehicle.status}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div className="rounded-xl border border-gray-200 p-4">
                            <div className="mb-2 flex items-center gap-2 text-blue-600">
                                <Hash size={17} />
                                <p className="text-xs font-medium text-gray-500">Vehicle ID</p>
                            </div>
                            <p className="font-semibold text-gray-900">{vehicle.vehicle_id}</p>
                        </div>

                        <div className="rounded-xl border border-gray-200 p-4">
                            <div className="mb-2 flex items-center gap-2 text-blue-600">
                                <Truck size={17} />
                                <p className="text-xs font-medium text-gray-500">Vehicle Type</p>
                            </div>
                            <p className="font-semibold text-gray-900">{vehicle.vehicle_type}</p>
                        </div>

                        <div className="rounded-xl border border-gray-200 p-4">
                            <div className="mb-2 flex items-center gap-2 text-blue-600">
                                <Weight size={17} />
                                <p className="text-xs font-medium text-gray-500">Capacity</p>
                            </div>
                            <p className="font-semibold text-gray-900">{vehicle.capacity} Ton</p>
                        </div>

                        <div className="rounded-xl border border-gray-200 p-4">
                            <div className="mb-2 flex items-center gap-2 text-blue-600">
                                <UserRound size={17} />
                                <p className="text-xs font-medium text-gray-500">Transporter ID</p>
                            </div>
                            <p className="font-semibold text-gray-900">{vehicle.transporter_id}</p>
                        </div>

                        <div className="rounded-xl border border-gray-200 p-4 sm:col-span-2">
                            <div className="mb-2 flex items-center gap-2 text-blue-600">
                                <ShieldCheck size={17} />
                                <p className="text-xs font-medium text-gray-500">Assigned Driver ID</p>
                            </div>
                            <p className="font-semibold text-gray-900">{vehicle.driver_id ?? "Not Assigned"}</p>
                        </div>

                        <div className="rounded-xl border border-gray-200 p-4">
                            <div className="mb-2 flex items-center gap-2 text-blue-600">
                                <CalendarDays size={17} />
                                <p className="text-xs font-medium text-gray-500">Created At</p>
                            </div>
                            <p className="text-sm font-medium text-gray-800">{new Date(vehicle.created_at).toLocaleString()}</p>
                        </div>

                        <div className="rounded-xl border border-gray-200 p-4">
                            <div className="mb-2 flex items-center gap-2 text-blue-600">
                                <Clock size={17} />
                                <p className="text-xs font-medium text-gray-500">Last Updated</p>
                            </div>
                            <p className="text-sm font-medium text-gray-800">{new Date(vehicle.updated_at).toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end border-t border-gray-100 pt-4">
                        <button onClick={onClose} className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleDetailsModal;