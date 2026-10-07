import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

function RoleUpdateModal({ openUpdate, setOpenUpdate, Rid, Rname, setRname, saveRole }) {

    return (
        <Dialog open={openUpdate} onClose={() => setOpenUpdate(false)} className="relative z-10" >
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md rounded-lg bg-white p-6">

                    <DialogTitle className="text-xl font-semibold text-gray-900">
                        Update Role {Rid}
                    </DialogTitle>

                    <div className="mt-5">
                        <label className="block mb-2 text-sm font-medium text-gray-700"> Role Name </label>
                        <input
                            type="text"
                            value={Rname}
                            onChange={(e) => setRname(e.target.value)}
                            placeholder="Enter role name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            onClick={() => setOpenUpdate(false)}
                            className="rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={() => saveRole(Rid)}
                            className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
                        >
                            Update
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog >
    )

}

export default RoleUpdateModal;