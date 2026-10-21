import { NavLink } from "react-router-dom";
import {
    FaTachometerAlt,
    FaUserShield,
    FaUsers,
    FaUserFriends,
    FaTruck,
    FaCarSide,
    FaBoxes,
    FaClipboardList,
    FaCog,
} from "react-icons/fa";

function Sidebar() {
    return (
        <aside className="flex h-screen w-64 shrink-0 flex-col bg-slate-950 text-slate-200">
            <div className="flex h-20 items-center gap-3 border-b border-white/10 px-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <FaTruck className="text-lg" />
                </div>
                <div>
                    <h1 className="text-base font-bold tracking-wide text-white">TransportHub</h1>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Admin Console</p>
                </div>
            </div>
            <nav className="flex-1 space-y-5 overflow-y-auto px-3 py-5">
                <div>
                    <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Workspace</p>
                    <NavLink
                        to="/admin"
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`
                        }
                    >
                        <FaTachometerAlt className="w-4 text-base" />
                        <span>Dashboard</span>
                    </NavLink>
                </div>
                <div>
                    <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Management</p>
                    <div className="space-y-1">
                        <NavLink
                            to="/admin/roles"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`
                            }
                        >
                            <FaUserShield className="w-4 text-base" />
                            <span>Roles</span>
                        </NavLink>
                        <NavLink
                            to="/admin/users"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`
                            }
                        >
                            <FaUsers className="w-4 text-base" />
                            <span>Users</span>
                        </NavLink>
                        <NavLink
                            to="/admin/customers"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`
                            }
                        >
                            <FaUserFriends className="w-4 text-base" />
                            <span>Customers</span>
                        </NavLink>
                        <NavLink
                            to="/admin/transporters"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`
                            }
                        >
                            <FaTruck className="w-4 text-base" />
                            <span>Transporters</span>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Operations</p>
                    <div className="space-y-1">
                        <NavLink
                            to="/admin/vehicles"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`
                            }
                        >
                            <FaCarSide className="w-4 text-base" />
                            <span>Vehicles</span>
                            <span className="ml-auto rounded-full bg-slate-800 px-2 py-0.5 text-[9px] text-slate-400">New</span>
                        </NavLink>
                        <NavLink
                            to="/admin/inventory"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`
                            }
                        >
                            <FaBoxes className="w-4 text-base" />
                            <span>Inventory</span>
                            <span className="ml-auto rounded-full bg-slate-800 px-2 py-0.5 text-[9px] text-slate-400">New</span>
                        </NavLink>
                        <NavLink
                            to="/admin/bookings"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`
                            }
                        >
                            <FaClipboardList className="w-4 text-base" />
                            <span>Bookings</span>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">System</p>
                    <NavLink
                        to="/admin/settings"
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`
                        }
                    >
                        <FaCog className="w-4 text-base" />
                        <span>Settings</span>
                    </NavLink>
                </div>
            </nav>
            <div className="border-t border-white/10 px-4 py-4 text-xs text-slate-500">© 2026 TransportHub</div>
        </aside>
    );
}

export default Sidebar;
