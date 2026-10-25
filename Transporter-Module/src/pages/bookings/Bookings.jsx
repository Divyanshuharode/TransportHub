import { Truck, Clock, CheckCircle, XCircle, Eye } from "lucide-react";

const Bookings = () => {
    const bookings = [
        { id: "BK-101", customer: "Rahul Sharma", pickup: "Indore", drop: "Bhopal", vehicle: "Tata Ace", date: "25 Oct 2026", amount: "₹2,500", status: "In Transit" },
        { id: "BK-102", customer: "Amit Verma", pickup: "Bhopal", drop: "Jabalpur", vehicle: "Tata 407", date: "26 Oct 2026", amount: "₹5,000", status: "Confirmed" },
        { id: "BK-103", customer: "Priya Singh", pickup: "Indore", drop: "Ujjain", vehicle: "Tata Ace", date: "22 Oct 2026", amount: "₹1,800", status: "Delivered" },
        { id: "BK-104", customer: "Rohit Patel", pickup: "Dewas", drop: "Indore", vehicle: "Tata 407", date: "27 Oct 2026", amount: "₹2,000", status: "Cancelled" },
    ];

    return (
        <div className="space-y-2 p-1">

            <div>
                <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
                {/* <p className="mt-1 text-sm text-gray-500">Track and manage your transport bookings.</p> */}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">Total Bookings</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">04</h2>
                    </div>
                    <Truck size={20} className="text-blue-600" />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">In Transit</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">01</h2>
                    </div>
                    <Clock size={20} className="text-amber-600" />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">Delivered</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">01</h2>
                    </div>
                    <CheckCircle size={20} className="text-green-600" />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">Cancelled</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">01</h2>
                    </div>
                    <XCircle size={20} className="text-red-500" />
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 p-4">
                    <div>
                        <h2 className="font-semibold text-gray-900">All Bookings</h2>
                        <p className="mt-1 text-xs text-gray-500">View your booking details and trip status.</p>
                    </div>

                    <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-500">
                        <option>All Status</option>
                        <option>Confirmed</option>
                        <option>In Transit</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                            <tr>
                                <th className="px-4 py-3">Booking ID</th>
                                <th className="px-4 py-3">Customer</th>
                                <th className="px-4 py-3">Route</th>
                                <th className="px-4 py-3">Vehicle</th>
                                <th className="px-4 py-3">Trip Date</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {bookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-50">
                                    <td className="whitespace-nowrap px-4 py-4 font-semibold text-blue-600">{booking.id}</td>
                                    <td className="whitespace-nowrap px-4 py-4 text-gray-800">{booking.customer}</td>
                                    <td className="whitespace-nowrap px-4 py-4 text-gray-600">{booking.pickup} → {booking.drop}</td>
                                    <td className="whitespace-nowrap px-4 py-4 text-gray-600">{booking.vehicle}</td>
                                    <td className="whitespace-nowrap px-4 py-4 text-gray-600">{booking.date}</td>
                                    <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-800">{booking.amount}</td>
                                    <td className="whitespace-nowrap px-4 py-4">
                                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${booking.status === "In Transit" ? "bg-amber-100 text-amber-700" :
                                            booking.status === "Confirmed" ? "bg-blue-100 text-blue-700" :
                                                booking.status === "Delivered" ? "bg-green-100 text-green-700" :
                                                    "bg-red-100 text-red-700"
                                            }`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <button title="View Booking" className="rounded-md border border-gray-200 p-2 text-gray-600 hover:bg-gray-100">
                                            <Eye size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Bookings;