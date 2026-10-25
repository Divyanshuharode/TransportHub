
export default function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-50 sm:p-2">

            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Welcome </h1>
                {/* <p className="mt-1 text-sm text-slate-500">Welcome back! Here is your transport business overview.</p> */}
            </div>

            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-4 xl:grid-cols-4">
                <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Total Bookings</p>
                    <h2 className="mt-1 text-2xl font-bold text-slate-900">120</h2>
                </div>

                <div className="rounded-lg border border-amber-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Pending Requests</p>
                    <h2 className="mt-1 text-2xl font-bold text-amber-600">15</h2>
                </div>

                <div className="rounded-lg border border-blue-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Active Trips</p>
                    <h2 className="mt-1 text-2xl font-bold text-blue-700">8</h2>
                </div>

                <div className="rounded-lg border border-emerald-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Completed Trips</p>
                    <h2 className="mt-1 text-2xl font-bold text-emerald-700">97</h2>
                </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-4 xl:grid-cols-4">
                <div className="rounded-lg border border-emerald-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Total Earnings</p>
                    <h2 className="mt-1 text-2xl font-bold text-emerald-700">₹1,85,000</h2>
                </div>

                <div className="rounded-lg border border-blue-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Available Vehicles</p>
                    <h2 className="mt-1 text-2xl font-bold text-blue-700">12</h2>
                </div>

                <div className="rounded-lg border border-purple-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Total Drivers</p>
                    <h2 className="mt-1 text-2xl font-bold text-purple-700">10</h2>
                </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <div className="border-b border-slate-200 p-4">
                    <h2 className="text-base font-semibold text-slate-900">Recent Bookings</h2>
                    <p className="mt-1 text-xs text-slate-500">Overview of your latest transport bookings.</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-xs text-slate-500">
                            <tr>
                                <th className="px-4 py-3 font-medium">Booking ID</th>
                                <th className="px-4 py-3 font-medium">Customer</th>
                                <th className="px-4 py-3 font-medium">Route</th>
                                <th className="px-4 py-3 font-medium">Amount</th>
                                <th className="px-4 py-3 font-medium">Status</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100 text-slate-700">
                            <tr>
                                <td className="px-4 py-3 font-medium">#TH101</td>
                                <td className="px-4 py-3">Rahul Sharma</td>
                                <td className="px-4 py-3">Indore - Bhopal</td>
                                <td className="px-4 py-3">₹8,500</td>
                                <td className="px-4 py-3"><span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">In Transit</span></td>
                            </tr>

                            <tr>
                                <td className="px-4 py-3 font-medium">#TH102</td>
                                <td className="px-4 py-3">Amit Verma</td>
                                <td className="px-4 py-3">Bhopal - Jabalpur</td>
                                <td className="px-4 py-3">₹12,000</td>
                                <td className="px-4 py-3"><span className="rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">Pending</span></td>
                            </tr>

                            <tr>
                                <td className="px-4 py-3 font-medium">#TH103</td>
                                <td className="px-4 py-3">Suresh Patel</td>
                                <td className="px-4 py-3">Indore - Ujjain</td>
                                <td className="px-4 py-3">₹4,500</td>
                                <td className="px-4 py-3"><span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">Delivered</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}
