import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, } from "@headlessui/react";

export default function UserAddModal(
    { open, setOpen, name, setname, email, setemail, pass, setpass, allRoles, Role, setRole, addUser }
) {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel transition
                        className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                    <p as="h3" className="text-base font-semibold text-white" > Add New User :- </p>
                                    <div className="mt-4 space-y-5">
                                        {/* Name */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1"> Name </label>
                                            <input
                                                type="text"
                                                placeholder="Enter full name"
                                                value={name}
                                                onChange={(e) => setname(e.target.value)}
                                                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1"> Email </label>
                                            <input
                                                type="email"
                                                placeholder="Enter email"
                                                value={email}
                                                onChange={(e) => setemail(e.target.value)}
                                                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        {/* Password */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1"> Password </label>
                                            <input
                                                type="password"
                                                placeholder="Enter password"
                                                value={pass}
                                                onChange={(e) => setpass(e.target.value)}
                                                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
                                            />
                                        </div>
                                        {/* // role section  */}
                                        <div className="mb-6">
                                            <label className="block text-lg font-medium text-gray-300 mb-2"> Role </label>
                                            <select value={Role} onChange={(e) => setRole(e.target.value)}
                                                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500" >
                                                <option value="">Select Role </option>
                                                {allRoles.map((item) => (
                                                    <option value={item.role_id} >{item.role_name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button onClick={() => addUser()} className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto">
                                Save Information
                            </button>
                            <button onClick={() => setOpen(false)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto">
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}