function Settings() {
    return (
        <div className="min-h-full bg-slate-50 p-4 sm:p-6 lg:p-8">
            <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Administration</p>
                <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">Settings</h1>
                <p className="mt-1 text-sm text-slate-500">Manage your TransportHub preferences.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="h-fit rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <h2 className="mb-4 px-3 text-sm font-semibold text-slate-900">Settings menu</h2>
                    <div className="space-y-1">
                        <button className="w-full rounded-lg bg-blue-50 px-4 py-2.5 text-left text-sm font-semibold text-blue-700">
                            General
                        </button>
                        <button className="w-full rounded-lg px-4 py-2.5 text-left text-sm text-slate-600 transition hover:bg-slate-50">
                            Booking
                        </button>
                        <button className="w-full rounded-lg px-4 py-2.5 text-left text-sm text-slate-600 transition hover:bg-slate-50">
                            Notifications
                        </button>
                        <button className="w-full rounded-lg px-4 py-2.5 text-left text-sm text-slate-600 transition hover:bg-slate-50">
                            Account
                        </button>
                        <button className="w-full rounded-lg px-4 py-2.5 text-left text-sm text-slate-600 transition hover:bg-slate-50">
                            System
                        </button>
                    </div>
                </div>

                <div className="space-y-6 lg:col-span-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                        <h2 className="text-base font-semibold text-slate-900">General settings</h2>
                        <p className="mb-5 mt-1 text-sm text-slate-500">Basic information about your platform.</p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-slate-700">Platform name</label>
                                <input type="text" value="TransportHub" readOnly className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none" />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-slate-700">Contact email</label>
                                <input type="email" value="admin@transporthub.com" readOnly className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none" />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-slate-700">Contact phone</label>
                                <input type="text" value="+91 9876543210" readOnly className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none" />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-slate-700">Currency</label>
                                <select defaultValue="INR" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                                    <option value="INR">INR (₹)</option>
                                    <option value="USD">USD ($)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                        <h2 className="text-base font-semibold text-slate-900">Booking settings</h2>
                        <p className="mb-5 mt-1 text-sm text-slate-500">Configure booking preferences.</p>
                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-medium text-slate-800">Auto confirm booking</p>
                                    <p className="mt-1 text-sm text-slate-500">Automatically confirm new bookings.</p>
                                </div>
                                <input type="checkbox" className="h-4 w-4 accent-blue-600" />
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-medium text-slate-800">Allow cancellation</p>
                                    <p className="mt-1 text-sm text-slate-500">Allow customers to cancel bookings.</p>
                                </div>
                                <input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                        <h2 className="text-base font-semibold text-slate-900">Notifications</h2>
                        <p className="mb-5 mt-1 text-sm text-slate-500">Choose which updates you want to receive.</p>
                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-medium text-slate-800">Booking notifications</p>
                                    <p className="mt-1 text-sm text-slate-500">Get notified about booking updates.</p>
                                </div>
                                <input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" />
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-medium text-slate-800">Transporter notifications</p>
                                    <p className="mt-1 text-sm text-slate-500">Get notified about transporter updates.</p>
                                </div>
                                <input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                        <h2 className="text-base font-semibold text-slate-900">Account settings</h2>
                        <p className="mb-5 mt-1 text-sm text-slate-500">Manage administrator account details.</p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-slate-700">Admin name</label>
                                <input type="text" value="Administrator" readOnly className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none" />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
                                <input type="email" value="admin@transporthub.com" readOnly className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none" />
                            </div>
                        </div>
                        <button className="mt-5 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                            Change password
                        </button>
                    </div>

                    <div className="flex justify-end">
                        <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
