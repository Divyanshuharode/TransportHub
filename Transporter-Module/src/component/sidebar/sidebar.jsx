
import {
    Truck,
    LayoutDashboard,
    ClipboardList,
    CalendarCheck,
    MapPin,
    Users,
    Wallet,
    ChartNoAxesColumn,
    UserRound,
    FileCheck,
    Settings,
    LogOut,
    ChevronsUpDown,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate()

    const logout = async () => {
        await localStorage.removeItem("token")
        navigate("/");
    };

    return (
        <nav className="flex h-screen w-64 flex-col bg-[#111827] text-white">

            {/* Logo */}
            <div className="flex items-center gap-3 px-5 py-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                    <Truck size={25} />
                </div>

                <div>
                    <h1 className="text-lg font-bold">Transport Hub</h1>
                    <p className="text-[10px] tracking-[2px] text-gray-400">
                        Welcome back
                    </p>
                </div>
            </div>

            <div className="mx-5 border-t border-gray-700" />

            {/* Main Menu */}
            <div className="flex-1 space-y-6 overflow-y-auto px-3 py-5">
                <div>
                    <p className="mb-3 px-3 text-[11px] font-semibold tracking-widest text-gray-400">
                        MAIN MENU
                    </p>
                    <div className="space-y-1">
                        <NavLink
                            to="/transporter" end
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`
                            }
                        >
                            <LayoutDashboard size={19} />
                            <span>Dashboard</span>
                        </NavLink>
                        <NavLink
                            to="/transporter/vehicles"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`
                            }
                        >
                            <Truck size={19} />
                            <span> My Vehicles</span>
                        </NavLink>
                        <NavLink
                            to="/transporter/transportRequests"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`
                            }
                        >
                            <ClipboardList size={19} />
                            <span>Transport Requests</span>
                        </NavLink>
                        <NavLink to="/transporter/bookings" className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`
                        }>
                            <CalendarCheck size={19} />
                            My Bookings
                        </NavLink>
                        <NavLink to="/transporter/livetracking" className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`
                        }>
                            <MapPin size={19} />
                            Live Tracking
                        </NavLink>
                    </div>
                </div>

                {/* Business */}
                <div>
                    <p className="mb-3 px-3 text-[11px] font-semibold tracking-widest text-gray-400">
                        BUSINESS
                    </p>

                    <div className="space-y-1">
                        <NavLink to="/transporter/drivers" className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`
                        }>
                            <Users size={19} />
                            My Drivers
                        </NavLink>
                        <NavLink to="/transporter/earnings_payments" className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`
                        }>
                            <Wallet size={19} />
                            Earnings & Payments
                        </NavLink>
                        <NavLink to="/transporter/reports" className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`
                        }>
                            <ChartNoAxesColumn size={19} />
                            Reports
                        </NavLink>
                    </div>
                </div>

                {/* Account */}
                <div>
                    <p className="mb-3 px-3 text-[11px] font-semibold tracking-widest text-gray-400">
                        ACCOUNT
                    </p>

                    <div className="space-y-1">
                        <NavLink to="/transporter/profile" className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`
                        }>
                            <UserRound size={19} />
                            My Profile
                        </NavLink>
                        <NavLink to="/transporter/documentsVerify" className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`
                        }>
                            <FileCheck size={19} />
                            Documents & Verification
                        </NavLink>
                        <NavLink to="/transporter/settings" className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`
                        }>
                            <Settings size={19} />
                            Settings
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Logout */}
            <div className="px-3 pb-3">
                <div className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-red-400">
                    <LogOut size={19} />
                    <button onClick={logout}>Logout</button>
                </div>
            </div>

            <div className="mx-5 border-t border-gray-700" />

            {/* Profile */}
            <div className="flex items-center gap-3 px-4 py-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700">
                    <UserRound size={21} />
                </div>

                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                        Transporter Name
                    </p>
                    <p className="text-xs text-gray-400">
                        Transport Partner
                    </p>
                </div>

                <ChevronsUpDown size={17} className="text-gray-400" />
            </div>
        </nav>
    );
}

export default Sidebar;