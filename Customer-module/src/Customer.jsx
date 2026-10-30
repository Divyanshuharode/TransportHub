
import React from "react";

function Customer() {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-800">

            {/* Navbar */}
            <nav className="flex items-center justify-between bg-blue-700 px-6 py-4 text-white">
                <h1 className="text-xl font-bold">🚚 Transport Hub</h1>
                <div className="flex gap-5 text-sm">
                    <a href="#dashboard">Dashboard</a>
                    <a href="#booking">Book Transport</a>
                    <a href="#bookings">My Bookings</a>
                    <a href="#profile">Profile</a>
                </div>
            </nav>

            <div className="mx-auto max-w-7xl space-y-8 p-5">

                {/* Dashboard */}
                <section id="dashboard">
                    <h2 className="mb-4 text-2xl font-bold">Customer Dashboard</h2>
                    <p className="mb-5 text-slate-500">Welcome back! Manage your goods transport easily.</p>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-lg border bg-white p-5">
                            <p className="text-sm text-slate-500">Total Bookings</p>
                            <h3 className="mt-2 text-3xl font-bold text-blue-600">12</h3>
                        </div>
                        <div className="rounded-lg border bg-white p-5">
                            <p className="text-sm text-slate-500">Pending</p>
                            <h3 className="mt-2 text-3xl font-bold text-orange-500">2</h3>
                        </div>
                        <div className="rounded-lg border bg-white p-5">
                            <p className="text-sm text-slate-500">In Transit</p>
                            <h3 className="mt-2 text-3xl font-bold text-indigo-600">3</h3>
                        </div>
                        <div className="rounded-lg border bg-white p-5">
                            <p className="text-sm text-slate-500">Delivered</p>
                            <h3 className="mt-2 text-3xl font-bold text-green-600">7</h3>
                        </div>
                    </div>
                </section>

                {/* Book Transport */}
                <section id="booking" className="rounded-lg border bg-white p-5">
                    <h2 className="mb-5 text-xl font-bold">Book Goods Transport</h2>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <label className="mb-1 block text-sm font-medium">Pickup Location</label>
                            <input className="w-full rounded-md border p-2" placeholder="Enter pickup location" />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">Delivery Location</label>
                            <input className="w-full rounded-md border p-2" placeholder="Enter delivery location" />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">Material Type</label>
                            <select className="w-full rounded-md border bg-white p-2">
                                <option>Select Material</option>
                                <option>Electronics</option>
                                <option>Furniture</option>
                                <option>Food Items</option>
                                <option>Industrial Goods</option>
                            </select>
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">Weight / Quantity</label>
                            <input className="w-full rounded-md border p-2" placeholder="e.g. 5 Ton" />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">Vehicle Type</label>
                            <select className="w-full rounded-md border bg-white p-2">
                                <option>Select Vehicle</option>
                                <option>Small Truck</option>
                                <option>Medium Truck</option>
                                <option>Large Truck</option>
                            </select>
                        </div>
                        <div className="flex items-end">
                            <button className="w-full rounded-md bg-blue-600 p-2.5 font-medium text-white hover:bg-blue-700">
                                Search Trucks
                            </button>
                        </div>
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">🚚 Small Truck</h3>
                            <p className="my-2 text-sm text-slate-500">Capacity: Up to 5 Ton</p>
                            <p className="font-bold text-blue-600">₹24 / km</p>
                            <button className="mt-3 rounded-md bg-blue-600 px-4 py-2 text-sm text-white">Choose</button>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">🚛 Medium Truck</h3>
                            <p className="my-2 text-sm text-slate-500">Capacity: Up to 10 Ton</p>
                            <p className="font-bold text-blue-600">₹32 / km</p>
                            <button className="mt-3 rounded-md bg-blue-600 px-4 py-2 text-sm text-white">Choose</button>
                        </div>
                        <div className="rounded-lg border p-4">
                            <h3 className="font-semibold">🚛 Large Truck</h3>
                            <p className="my-2 text-sm text-slate-500">Capacity: Up to 20 Ton</p>
                            <p className="font-bold text-blue-600">₹45 / km</p>
                            <button className="mt-3 rounded-md bg-blue-600 px-4 py-2 text-sm text-white">Choose</button>
                        </div>
                    </div>
                    <p className="mt-3 text-xs text-slate-400">* Prices are sample static values for UI preview.</p>
                </section>

                {/* My Bookings */}
                <section id="bookings" className="rounded-lg border bg-white p-5">
                    <h2 className="mb-4 text-xl font-bold">My Bookings</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[650px] text-left text-sm">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="p-3">Booking ID</th>
                                    <th className="p-3">Route</th>
                                    <th className="p-3">Vehicle</th>
                                    <th className="p-3">Amount</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-3">TH1001</td>
                                    <td className="p-3">Indore → Bhopal</td>
                                    <td className="p-3">Small Truck</td>
                                    <td className="p-3">₹12,000</td>
                                    <td className="p-3"><span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">In Transit</span></td>
                                    <td className="p-3"><a href="#tracking" className="font-medium text-blue-600">Track</a></td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">TH1002</td>
                                    <td className="p-3">Bhopal → Jabalpur</td>
                                    <td className="p-3">Medium Truck</td>
                                    <td className="p-3">₹15,000</td>
                                    <td className="p-3"><span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">Pending</span></td>
                                    <td className="p-3"><span className="text-slate-400">View</span></td>
                                </tr>
                                <tr>
                                    <td className="p-3">TH1003</td>
                                    <td className="p-3">Indore → Ujjain</td>
                                    <td className="p-3">Small Truck</td>
                                    <td className="p-3">₹6,200</td>
                                    <td className="p-3"><span className="rounded-full bg-green-100 px-3 py-1 text-green-700">Delivered</span></td>
                                    <td className="p-3"><span className="text-slate-400">View</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Tracking */}
                <section id="tracking" className="rounded-lg border bg-white p-5">
                    <h2 className="mb-4 text-xl font-bold">Booking Details & Tracking</h2>

                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="rounded-lg bg-slate-50 p-4">
                            <p className="text-sm text-slate-500">Booking ID</p>
                            <h3 className="mb-4 font-bold">TH1001</h3>
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-sm text-slate-500">Pickup</p>
                                    <p className="font-semibold">Indore</p>
                                </div>
                                <span className="text-2xl text-blue-600">→</span>
                                <div>
                                    <p className="text-sm text-slate-500">Delivery</p>
                                    <p className="font-semibold">Bhopal</p>
                                </div>
                            </div>
                            <p className="mt-4 text-sm">Vehicle: Small Truck</p>
                            <p className="mt-2 text-sm">Transporter: Rohit Transport</p>
                            <p className="mt-2 text-sm">Booking Amount: ₹12,000</p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h3 className="mb-4 font-semibold">Delivery Status</h3>
                            <div className="space-y-4">
                                <p className="text-green-600">✓ Booking Confirmed</p>
                                <p className="text-green-600">✓ Assigned to Transporter</p>
                                <p className="font-semibold text-blue-600">● In Transit</p>
                                <p className="text-slate-400">○ Delivered</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Profile */}
                <section id="profile" className="rounded-lg border bg-white p-5">
                    <h2 className="mb-4 text-xl font-bold">My Profile</h2>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="mb-1 block text-sm font-medium">Full Name</label>
                            <input className="w-full rounded-md border p-2" defaultValue="Divyanshu Harode" />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">Email</label>
                            <input className="w-full rounded-md border p-2" defaultValue="customer@gmail.com" />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">Mobile Number</label>
                            <input className="w-full rounded-md border p-2" defaultValue="9876543210" />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium">City</label>
                            <input className="w-full rounded-md border p-2" defaultValue="Indore" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="mb-1 block text-sm font-medium">Address</label>
                            <textarea className="w-full rounded-md border p-2" rows="2" placeholder="Enter your address"></textarea>
                        </div>
                    </div>

                    <button className="mt-4 rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700">Update Profile</button>
                </section>

                {/* Login and Registration */}
                <section className="grid gap-5 md:grid-cols-2">
                    <div className="rounded-lg border bg-white p-5">
                        <h2 className="mb-4 text-xl font-bold">Customer Login</h2>
                        <input className="mb-3 w-full rounded-md border p-2" placeholder="Email Address" />
                        <input className="mb-3 w-full rounded-md border p-2" type="password" placeholder="Password" />
                        <button className="w-full rounded-md bg-blue-600 p-2.5 text-white">Login</button>
                        <p className="mt-3 text-center text-sm text-slate-500">Don't have an account? Register below.</p>
                    </div>

                    <div className="rounded-lg border bg-white p-5">
                        <h2 className="mb-4 text-xl font-bold">Customer Registration</h2>
                        <input className="mb-3 w-full rounded-md border p-2" placeholder="Full Name" />
                        <input className="mb-3 w-full rounded-md border p-2" placeholder="Email Address" />
                        <input className="mb-3 w-full rounded-md border p-2" placeholder="Mobile Number" />
                        <input className="mb-3 w-full rounded-md border p-2" type="password" placeholder="Create Password" />
                        <button className="w-full rounded-md bg-blue-600 p-2.5 text-white">Register</button>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t py-5 text-center text-sm text-slate-500">
                    © 2026 Transport Hub | Goods Transport Made Easy
                </footer>

            </div>
        </div>
    );
}

export default Customer;
