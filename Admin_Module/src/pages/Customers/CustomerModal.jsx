import { useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";

function CustomerModal({ open, setOpen, customer, onSave }) {

    const [form, setForm] = useState(
        customer || {
            name: "",
            email: "",
            phone: "",
            city: "",
        }
    );

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        onSave(form);
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-50">

            <DialogBackdrop className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm" />

            <div className="fixed inset-0 flex items-center justify-center p-4">

                <DialogPanel className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                        <DialogTitle className="text-xl font-semibold text-slate-900">
                            {customer ? "Edit Customer" : "Add Customer"}
                        </DialogTitle>

                        <button
                            onClick={() => setOpen(false)}
                            className="text-2xl text-slate-400 transition hover:text-slate-700"
                        >
                            ×
                        </button>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">

                        <Input
                            label="Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                        />

                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                        />

                        <Input
                            label="Phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Enter phone"
                        />

                        <Input
                            label="City"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            placeholder="Enter city"
                        />

                    </div>


                    <div className="flex justify-end gap-3 border-t border-slate-100 px-6 py-4">

                        <button
                            onClick={() => setOpen(false)}
                            className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleSubmit}
                            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            {customer ? "Update Customer" : "Add Customer"}
                        </button>

                    </div>

                </DialogPanel>

            </div>

        </Dialog>
    );
}


function Input({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
}) {
    return (
        <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
        </div>
    );
}

export default CustomerModal;
