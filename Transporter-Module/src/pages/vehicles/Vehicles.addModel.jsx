import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

export default function VehicleAddModal({ open, setOpen, vehicle_number, setvehicle_number, vehicle_type, setvehicle_type, capacity, setcapacity, status, setstatus, driver_id, setdriver_id, addVehicle }) {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm" />
            <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4">
                <DialogPanel className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
                    <DialogTitle className="text-lg font-semibold text-slate-900">Add New Vehicle</DialogTitle>

                    <div className="mt-5 space-y-4">
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">Vehicle Number</label>
                            <input type="text" placeholder="Enter vehicle number" value={vehicle_number || ""} onChange={(e) => setvehicle_number(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">Vehicle Type</label>
                            <input type="text" placeholder="e.g. 8 tair" value={vehicle_type || ""} onChange={(e) => setvehicle_type(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">Capacity (Ton)</label>
                            <input type="number" step="0.01" placeholder="Enter capacity" value={capacity || ""} onChange={(e) => setcapacity(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">Status</label>
                            <select value={status} onChange={(e) => setstatus(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                                <option value="Available">Available</option>
                                <option value="Busy">Busy</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">Driver ID (Optional)</label>
                            <input type="number" placeholder="Enter driver ID" value={driver_id || ""} onChange={(e) => setdriver_id(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                        <button onClick={() => setOpen(false)} className="rounded-lg bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600">Cancel</button>
                        <button onClick={addVehicle} className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">Save</button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}