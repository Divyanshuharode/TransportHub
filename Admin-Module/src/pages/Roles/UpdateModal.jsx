import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

function RoleUpdateModal({ openUpdate, setOpenUpdate, Rid, Rname, setRname, saveRole }) {
    return (
        <Dialog open={openUpdate} onClose={() => setOpenUpdate(false)} className="relative z-10">
            <div className="fixed inset-0 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
                <DialogPanel className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
                    <DialogTitle className="text-xl font-semibold text-slate-900">
                        Update Role
                    </DialogTitle>
                    <div className="mt-5">
                        <label className="mb-2 block text-s font-medium text-slate-700">Role Name</label>
                        <input
                            type="text"
                            value={Rname}
                            onChange={(e) => setRname(e.target.value)}
                            placeholder="Enter role name"
                            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                    </div>
                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            onClick={() => setOpenUpdate(false)}
                            className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-red-500 "
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => saveRole(Rid)}
                            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default RoleUpdateModal;
