import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

function RoleAddModal({ open, setOpen, rname, setrname, addRole }) {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                    <DialogTitle className="text-xl font-semibold text-slate-900">Add new role</DialogTitle>
                    <p className="mt-1 text-sm text-slate-500">Create a role for your TransportHub team.</p>
                    <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-slate-700">Role name</label>
                        <input
                            type="text"
                            placeholder="Enter role name"
                            value={rname}
                            onChange={(e) => setrname(e.target.value)}
                            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>
                    <div className="mt-6 flex justify-end gap-3">
                        <button onClick={() => setOpen(false)} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">Cancel</button>
                        <button onClick={addRole} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">Save role</button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default RoleAddModal;
