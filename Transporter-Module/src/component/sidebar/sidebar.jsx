
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

import { NavLink } from "react-router-dom";

function Sidebar() {
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
                        {/* <div className="flex items-center gap-3 rounded-lg bg-blue-600 px-3 py-3 text-sm"> */}

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
                        {/* </div> */}

                        {/* <NavLink
                                to="/transporter" end
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    }`
                                }
                            >
                                <Truck size={19} />
                                <span> My Vehicles</span>
                            </NavLink> */}

                        <div className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-300">
                            <ClipboardList size={19} />
                            Transport Requests
                        </div>

                        <div className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-300">
                            <CalendarCheck size={19} />
                            My Bookings
                        </div>

                        <div className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-300">
                            <MapPin size={19} />
                            Live Tracking
                        </div>
                    </div>
                </div>

                {/* Business */}
                <div>
                    <p className="mb-3 px-3 text-[11px] font-semibold tracking-widest text-gray-400">
                        BUSINESS
                    </p>

                    <div className="space-y-1">
                        <div className="flex items-center gap-3 px-3 py-3 text-sm text-gray-300">
                            <Users size={19} />
                            My Drivers
                        </div>

                        <div className="flex items-center gap-3 px-3 py-3 text-sm text-gray-300">
                            <Wallet size={19} />
                            Earnings & Payments
                        </div>

                        <div className="flex items-center gap-3 px-3 py-3 text-sm text-gray-300">
                            <ChartNoAxesColumn size={19} />
                            Reports
                        </div>
                    </div>
                </div>

                {/* Account */}
                <div>
                    <p className="mb-3 px-3 text-[11px] font-semibold tracking-widest text-gray-400">
                        ACCOUNT
                    </p>

                    <div className="space-y-1">
                        <div className="flex items-center gap-3 px-3 py-3 text-sm text-gray-300">
                            <UserRound size={19} />
                            My Profile
                        </div>

                        <div className="flex items-center gap-3 px-3 py-3 text-sm text-gray-300">
                            <FileCheck size={19} />
                            Documents & Verification
                        </div>

                        <div className="flex items-center gap-3 px-3 py-3 text-sm text-gray-300">
                            <Settings size={19} />
                            Settings
                        </div>
                    </div>
                </div>
            </div>

            {/* Logout */}
            <div className="px-3 pb-3">
                <div className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-red-400">
                    <LogOut size={19} />
                    Logout
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