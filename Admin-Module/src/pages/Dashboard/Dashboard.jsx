import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck } from "lucide-react";

import DashboardCards from "../../components/cards/DashboardCards";
import BookingChart from "./BookingChart";
import BookingStatus from "./BookingStatus";

import { getTransporterCount, totalCustomersApi } from "../../services/dashboard.service";

function Dashboard() {
    const [transporterCount, setTransporterCount] = useState(0);
    const [customerCount, setCustomerCount] = useState(0);

    useEffect(() => {
        getTrans();
    }, []);

    const getTrans = async () => {
        try {
            const transporterCount = await getTransporterCount();
            setTransporterCount(transporterCount.data.data[0]?.totalTransporters || 0);

            const totaltotalCustomers = await totalCustomersApi();
            // console.log(totaltotalCustomers);
            setCustomerCount(totaltotalCustomers.data.data[0]?.totalTransporters || 0)

        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="min-h-full bg-slate-50 p-4 sm:p-6 lg:p-8">

            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 px-4 py-4 text-white shadow-md shadow-blue-100 sm:px-5">
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100">TransportHub · Admin</p>
                    <h1 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">Welcome back, Admin</h1>
                    <p className="mt-1 text-xs text-blue-100">Manage bookings, customers, and transport partners from one place.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-white/15 sm:flex"><Truck size={20} /></div>
                    <Link to="/admin/bookings" className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50">View bookings <ArrowRight size={14} /></Link>
                </div>
            </div>

            <DashboardCards transporterCount={transporterCount} />
            <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-5">
                <div className="xl:col-span-3">
                    <BookingChart />
                </div>
                <div className="xl:col-span-2">
                    <BookingStatus />
                </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 sm:px-6">
                    <div>
                        <h2 className="text-base font-semibold text-slate-900">Recent bookings</h2>
                        <p className="mt-1 text-xs text-slate-500">Latest transport requests</p>
                    </div>
                    <Link to="/admin/bookings" className="text-sm font-semibold text-blue-600 hover:text-blue-700">View all bookings →</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[680px] text-left text-sm">
                        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                            <tr>
                                <th className="px-5 py-3 font-semibold">Booking ID</th>
                                <th className="px-5 py-3 font-semibold">Customer</th>
                                <th className="px-5 py-3 font-semibold">Route</th>
                                <th className="px-5 py-3 font-semibold">Vehicle</th>
                                <th className="px-5 py-3 font-semibold">Date</th>
                                <th className="px-5 py-3 font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={6} className="px-5 py-10 text-center text-sm text-slate-500">Booking data will appear here when the booking API is connected.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;