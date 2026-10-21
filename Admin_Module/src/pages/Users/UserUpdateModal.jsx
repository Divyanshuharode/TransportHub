export default function UserUpdateModal({ open, setOpen, name, setname, email, setemail, pass, setpass, Role, setRole, allRoles, updateUser }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
            <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
                <h2 className="text-xl font-semibold text-slate-900">Update user</h2>
                <p className="mt-1 text-sm text-slate-500">Edit account details and save your changes.</p>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700">Full name</label>
                        <input type="text" value={name || ""} onChange={(e) => setname(e.target.value)} placeholder="Enter full name" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                    </div>
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
                        <input type="email" value={email || ""} onChange={(e) => setemail(e.target.value)} placeholder="Enter email" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                    </div>
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700">New password</label>
                        <input type="password" value={pass || ""} onChange={(e) => setpass(e.target.value)} placeholder="Enter new password" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                    </div>
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700">Role</label>
                        <select value={Role || ""} onChange={(e) => setRole(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                            <option value="">Select role</option>
                            {allRoles.map((role) => <option key={role.role_id} value={role.role_id}>{role.role_name}</option>)}
                        </select>
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-3">
                    <button onClick={() => setOpen(false)} className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Cancel</button>
                    <button onClick={updateUser} className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">Save changes</button>
                </div>
            </div>
        </div>
    );
}
