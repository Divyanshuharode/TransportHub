import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react' //( @headlessui/react ) inko download bhi karna padega
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline' //( @heroicons/react/24/outline ) inko download bhi karna padega

function RoleAddModal({ open, setOpen, rname, setrname, addRole }) {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold text-white w-100">
                                        ADD NEW ROLE <br /><br /><hr />
                                    </DialogTitle><br />
                                    <div className="mt-4">
                                        <label className="block mb-2 text-sm font-medium text-white">
                                            Enter your Role Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter role name"
                                            value={rname}
                                            onChange={(e) => setrname(e.target.value)}
                                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 shadow-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                onClick={() => addRole()}
                                className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto"
                            >
                                Save Data
                            </button>
                            <button
                                onClick={() => setOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog >
    )
}

export default RoleAddModal;
