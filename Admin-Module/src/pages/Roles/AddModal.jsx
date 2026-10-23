import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

function RoleAddModal({ open, setOpen, rname, setrname, addRole }) {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                    <DialogTitle className="text-l font-semibold text-slate-900">Add new role :-</DialogTitle>
                    <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-slate-700">Role name</label>
                        <input
                            type="text"
                            placeholder="Ex- manager"
                            value={rname}
                            onChange={(e) => setrname(e.target.value)}
                            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>
                    <div className="mt-6 flex justify-end gap-3">
                        <button onClick={() => setOpen(false)} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-red-600 text-white bg-red-500">Cancel</button>
                        <button onClick={addRole} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">Save </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default RoleAddModal;
