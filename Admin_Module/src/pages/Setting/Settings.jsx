import React from "react";

function Settings() {
    return (
        <div className="p-6">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="text-gray-500">Manage your TransportHub settings</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Settings Menu */}
                <div className="bg-white rounded-xl shadow p-4 h-fit">
                    <h2 className="font-semibold mb-4">Settings</h2>

                    <div className="space-y-2">
                        <button className="w-full text-left px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600">
                            General
                        </button>

                        <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
                            Booking
                        </button>

                        <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
                            Notifications
                        </button>

                        <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
                            Account
                        </button>

                        <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
                            System
                        </button>
                    </div>
                </div>

                {/* Settings Content */}
                <div className="lg:col-span-2 space-y-6">

                    {/* General Settings */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-lg font-semibold">General Settings</h2>
                        <p className="text-sm text-gray-500 mb-5">
                            Basic information about your platform
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Platform Name
                                </label>
                                <input
                                    type="text"
                                    value="TransportHub"
                                    readOnly
                                    className="w-full border rounded-lg px-4 py-2.5 bg-gray-50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Contact Email
                                </label>
                                <input
                                    type="email"
                                    value="admin@transporthub.com"
                                    readOnly
                                    className="w-full border rounded-lg px-4 py-2.5 bg-gray-50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Contact Phone
                                </label>
                                <input
                                    type="text"
                                    value="+91 9876543210"
                                    readOnly
                                    className="w-full border rounded-lg px-4 py-2.5 bg-gray-50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Currency
                                </label>
                                <select className="w-full border rounded-lg px-4 py-2.5">
                                    <option>INR (₹)</option>
                                    <option>USD ($)</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    {/* Booking Settings */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-lg font-semibold">Booking Settings</h2>
                        <p className="text-sm text-gray-500 mb-5">
                            Configure booking preferences
                        </p>

                        <div className="space-y-4">

                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">Auto Confirm Booking</p>
                                    <p className="text-sm text-gray-500">
                                        Automatically confirm new bookings
                                    </p>
                                </div>

                                <input type="checkbox" className="w-5 h-5" />
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">Allow Cancellation</p>
                                    <p className="text-sm text-gray-500">
                                        Allow customers to cancel bookings
                                    </p>
                                </div>

                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-5 h-5"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Notification Settings */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-lg font-semibold">Notifications</h2>
                        <p className="text-sm text-gray-500 mb-5">
                            Manage system notifications
                        </p>

                        <div className="space-y-4">

                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">Booking Notifications</p>
                                    <p className="text-sm text-gray-500">
                                        Get notified about booking updates
                                    </p>
                                </div>

                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-5 h-5"
                                />
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">Transporter Notifications</p>
                                    <p className="text-sm text-gray-500">
                                        Get notified about transporter updates
                                    </p>
                                </div>

                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-5 h-5"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Account Settings */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-lg font-semibold">Account Settings</h2>
                        <p className="text-sm text-gray-500 mb-5">
                            Manage administrator account
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Admin Name
                                </label>
                                <input
                                    type="text"
                                    value="Administrator"
                                    readOnly
                                    className="w-full border rounded-lg px-4 py-2.5 bg-gray-50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value="admin@transporthub.com"
                                    readOnly
                                    className="w-full border rounded-lg px-4 py-2.5 bg-gray-50"
                                />
                            </div>

                        </div>

                        <button className="mt-5 px-4 py-2 bg-indigo-600 text-white rounded-lg">
                            Change Password
                        </button>
                    </div>

                    {/* Save */}
                    <div className="flex justify-end">
                        <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                            Save Changes
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Settings;