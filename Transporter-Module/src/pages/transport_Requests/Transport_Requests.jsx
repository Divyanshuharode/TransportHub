import { Truck, Clock, CheckCircle, XCircle, Eye } from "lucide-react";

const Transport_Requests = () => {
    const requests = [
        { id: "TR-101", customer: "Rahul Sharma", pickup: "Indore", drop: "Bhopal", vehicle: "Mini Truck", date: "25 Oct 2026", amount: "₹2,500", status: "Pending" },
        { id: "TR-102", customer: "Amit Verma", pickup: "Bhopal", drop: "Jabalpur", vehicle: "Light Truck", date: "26 Oct 2026", amount: "₹5,000", status: "Pending" },
        { id: "TR-103", customer: "Priya Singh", pickup: "Indore", drop: "Ujjain", vehicle: "Mini Truck", date: "27 Oct 2026", amount: "₹1,800", status: "Accepted" },
    ];

    return (
        <div className="space-y-2 p-1">

            <div>
                <h1 className="text-2xl font-bold text-gray-900">Transport Requests</h1>
                {/* <p className="mt-1 text-sm text-gray-500">Manage and respond to your transport booking requests.</p> */}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">Total Requests</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">03</h2>
                    </div>
                    <Truck size={20} className="text-blue-600" />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">Pending Requests</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">02</h2>
                    </div>
                    <Clock size={20} className="text-amber-600" />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div>
                        <p className="text-xs text-gray-500">Accepted Requests</p>
                        <h2 className="mt-1 text-xl font-bold text-gray-900">01</h2>
                    </div>
                    <CheckCircle size={20} className="text-green-600" />
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 p-4">
                    <div>
                        <h2 className="font-semibold text-gray-900">All Requests</h2>
                        <p className="mt-1 text-xs text-gray-500">Review customer booking details.</p>
                    </div>

                    <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-500">
                        <option>All Status</option>
                        <option>Pending</option>
                        <option>Accepted</option>
                        <option>Rejected</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                            <tr>
                                <th className="px-4 py-3">Request ID</th>
                                <th className="px-4 py-3">Customer</th>
                                <th className="px-4 py-3">Route</th>
                                <th className="px-4 py-3">Vehicle</th>
                                <th className="px-4 py-3">Trip Date</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {requests.map((request) => (
                                <tr key={request.id} className="hover:bg-gray-50">
                                    <td className="whitespace-nowrap px-4 py-4 font-semibold text-blue-600">{request.id}</td>
                                    <td className="whitespace-nowrap px-4 py-4 text-gray-800">{request.customer}</td>
                                    <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                                        {request.pickup} → {request.drop}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4 text-gray-600">{request.vehicle}</td>
                                    <td className="whitespace-nowrap px-4 py-4 text-gray-600">{request.date}</td>
                                    <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-800">{request.amount}</td>
                                    <td className="whitespace-nowrap px-4 py-4">
                                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${request.status === "Pending" ? "bg-amber-100 text-amber-700" : request.status === "Accepted" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                            {request.status}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4">
                                        <div className="flex items-center gap-2">
                                            <button title="View Details" className="rounded-md border border-gray-200 p-2 text-gray-600 hover:bg-gray-100">
                                                <Eye size={16} />
                                            </button>

                                            {request.status === "Pending" && (
                                                <>
                                                    <button title="Accept Request" className="rounded-md bg-green-50 p-2 text-green-600 hover:bg-green-100">
                                                        <CheckCircle size={16} />
                                                    </button>
                                                    <button title="Reject Request" className="rounded-md bg-red-50 p-2 text-red-600 hover:bg-red-100">
                                                        <XCircle size={16} />
                                                    </button>
                                                </>
                                            )}
                                        </div>
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

export default Transport_Requests;