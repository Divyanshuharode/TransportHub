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

            <DialogBackdrop className="fixed inset-0 bg-black/60" />

            <div className="fixed inset-0 flex items-center justify-center p-4">

                <DialogPanel className="w-full max-w-lg rounded-xl bg-gray-900 shadow-2xl">

                    {/* Header */}
                    <div className="flex items-center justify-between
                        border-b border-gray-700 px-6 py-4">

                        <DialogTitle className="text-xl font-semibold text-white">
                            {customer ? "Edit Customer" : "Add Customer"}
                        </DialogTitle>

                        <button
                            onClick={() => setOpen(false)}
                            className="text-gray-400 hover:text-white text-xl"
                        >
                            ×
                        </button>

                    </div>


                    {/* Form */}
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


                    {/* Footer */}
                    <div className="flex justify-end gap-3
                        border-t border-gray-700 px-6 py-4">

                        <button
                            onClick={() => setOpen(false)}
                            className="rounded-lg bg-gray-700 px-4 py-2
                            text-sm text-white hover:bg-gray-600"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleSubmit}
                            className="rounded-lg bg-indigo-600 px-4 py-2
                            text-sm font-medium text-white
                            hover:bg-indigo-500"
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
            <label className="block text-sm text-gray-300 mb-1">
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full rounded-lg border border-gray-700
                bg-gray-800 px-3 py-2.5 text-white
                placeholder-gray-500 outline-none
                focus:border-indigo-500 focus:ring-1
                focus:ring-indigo-500"
            />
        </div>
    );
}

export default CustomerModal;