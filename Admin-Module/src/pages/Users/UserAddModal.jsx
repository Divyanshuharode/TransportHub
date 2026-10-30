import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

export default function UserAddModal({ open, setOpen, name, setname, email, setemail, pass, setpass, allRoles, Role, setRole, addUser }) {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm" />
            <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4">
                <DialogPanel className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
                    <DialogTitle className="text-l font-semibold text-slate-900">Add new user</DialogTitle>
                    <div className="mt-5 space-y-4">
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">Full name</label>
                            <input type="text" placeholder="Enter full name" value={name || ""} onChange={(e) => setname(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                        </div>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
                            <input type="email" placeholder="Ex- user12@gmail.com" value={email || ""} onChange={(e) => setemail(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                        </div>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
                            <input type="password" placeholder="Enter password" value={pass || ""} onChange={(e) => setpass(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                        </div>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">Role</label>
                            <select value={Role} onChange={(e) => setRole(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                                <option value="">Select role</option>
                                {allRoles.map((item) => <option key={item.role_id} value={item.role_id}>{item.role_name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end gap-3">
                        <button onClick={() => setOpen(false)} className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 bg-red-500">Cancel</button>
                        <button onClick={addUser} className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">Save </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
