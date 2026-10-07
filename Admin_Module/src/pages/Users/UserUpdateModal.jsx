export default function UserUpdateModal({ open, setOpen, name, setname, email, setemail, pass, setpass, Role, setRole, allRoles, updateUser, UserId }) {

    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-[#1e2a3b] w-[680px] rounded-xl shadow-2xl border border-gray-600 overflow-hidden">

                <div className="px-7 py-6">
                    <h2 className="text-2xl font-bold text-white">Update User {UserId} :-</h2>
                </div>

                <div className="px-7 pb-7">

                    <div className="grid grid-cols-2 gap-5">

                        {/* Full Name */}
                        <div>
                            <label className="text-gray-300 text-base">Full Name</label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                placeholder="Enter full name"
                                className="mt-2 w-full bg-[#1e2a3b] border border-gray-600 rounded-lg px-5 py-3 text-gray-200 placeholder-gray-500 outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-gray-300 text-base">Email</label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                placeholder="Enter email"
                                className="mt-2 w-full bg-[#1e2a3b] border border-gray-600 rounded-lg px-5 py-3 text-gray-200 placeholder-gray-500 outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-gray-300 text-base">Password</label>

                            <input
                                type="password"
                                value={pass}
                                onChange={(e) => setpass(e.target.value)}
                                placeholder="Enter new password"
                                className="mt-2 w-full bg-[#1e2a3b] border border-gray-600 rounded-lg px-5 py-3 text-gray-200 placeholder-gray-500 outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Role */}
                        <div>
                            <label className="text-gray-300 text-base">Role</label>

                            <select
                                value={Role || ""}
                                onChange={(e) => setRole(e.target.value)}
                                className="mt-2 w-full bg-[#1e2a3b] border border-gray-600 rounded-lg px-5 py-3 text-gray-200 outline-none focus:border-blue-500"
                            >
                                <option value="" className="bg-[#1e2a3b]">Select Role</option>

                                {allRoles.map((role) => (
                                    <option key={role.role_id} value={role.role_id} className="bg-[#1e2a3b]">
                                        {role.role_name}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>
                </div>

                <div className="bg-[#243247] px-7 py-4 flex justify-end gap-3">

                    <button
                        onClick={() => setOpen(false)}
                        className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-2.5 rounded-lg"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={updateUser}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg"
                    >
                        Update
                    </button>

                </div>

            </div>
        </div>
    );
}