import { User, Building2, Mail, Phone, MapPin, Truck, Edit } from "lucide-react";

const Profile = () => {
    return (
        <div className="space-y-3 p-1">

            <div>
                <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
                {/* <p className="mt-1 text-sm text-gray-500">Manage your personal and business information.</p> */}
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 p-5">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            <User size={32} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">Divyanshu Harode</h2>
                            <p className="mt-1 text-sm text-gray-500">Transport Partner</p>
                            <span className="mt-2 inline-block rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                                Active Account
                            </span>
                        </div>
                    </div>

                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        <Edit size={16} /> Edit Profile
                    </button>
                </div>

                <div className="p-5">
                    <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900">
                        <User size={18} className="text-blue-600" /> Personal Information
                    </h3>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <p className="text-xs text-gray-500">Full Name</p>
                            <p className="mt-1 text-sm font-medium text-gray-800">Divyanshu Harode</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Email Address</p>
                            <p className="mt-1 flex items-center gap-2 text-sm font-medium text-gray-800">
                                <Mail size={15} className="text-gray-400" /> divyanshu@example.com
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Phone Number</p>
                            <p className="mt-1 flex items-center gap-2 text-sm font-medium text-gray-800">
                                <Phone size={15} className="text-gray-400" /> +91 98765 43210
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900">
                    <Building2 size={18} className="text-blue-600" /> Business Information
                </h3>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <p className="text-xs text-gray-500">Business Name</p>
                        <p className="mt-1 text-sm font-medium text-gray-800">Harode Transport Services</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Transporter ID</p>
                        <p className="mt-1 text-sm font-medium text-gray-800">TR-1001</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Business Address</p>
                        <p className="mt-1 flex items-center gap-2 text-sm font-medium text-gray-800">
                            <MapPin size={15} className="text-gray-400" /> Bhopal, Madhya Pradesh
                        </p>
                    </div>
                </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900">
                    <Truck size={18} className="text-blue-600" /> Transport Overview
                </h3>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-lg bg-gray-50 px-4 py-3">
                        <p className="text-xs text-gray-500">Registered Vehicles</p>
                        <p className="mt-1 text-xl font-bold text-gray-900">03</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 px-4 py-3">
                        <p className="text-xs text-gray-500">Registered Drivers</p>
                        <p className="mt-1 text-xl font-bold text-gray-900">03</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 px-4 py-3">
                        <p className="text-xs text-gray-500">Total Bookings</p>
                        <p className="mt-1 text-xl font-bold text-gray-900">24</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;