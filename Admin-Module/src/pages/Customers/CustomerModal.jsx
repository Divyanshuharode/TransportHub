import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

export default function CustomerAddModal({ open, setOpen, name, setName, email, setEmail, phone, setPhone, addCustomer, }) {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm" />

            <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4">
                <DialogPanel className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
                    <DialogTitle className="text-xl font-semibold text-slate-900">
                        Add new customer
                    </DialogTitle>

                    <p className="mt-1 text-sm text-slate-500">
                        Enter the customer details.
                    </p>

                    <div className="mt-5 space-y-4">
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">Customer name</label>
                            <input type="text" placeholder="Enter customer name" value={name || ""} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
                            <input type="email" placeholder="Enter email" value={email || ""} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">Mobile number</label>
                            <input type="text" placeholder="Enter mobile number" value={phone || ""} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                        <button onClick={() => setOpen(false)} className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                            Cancel
                        </button>

                        <button onClick={addCustomer} className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                            Save customer
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}