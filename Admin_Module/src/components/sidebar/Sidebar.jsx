import { NavLink } from "react-router-dom";
import {
    FaTachometerAlt,
    FaUserShield,
    FaUsers,
    FaUserFriends,
    FaTruck,
    FaClipboardList,
} from "react-icons/fa";

function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-slate-900 text-slate-200 flex flex-col">

            {/* Logo */}
            <div className="h-16 flex items-center px-6 border-b border-slate-700">
                <h1 className="text-xl font-bold tracking-wide text-white">
                    🚚 Transport Hub
                </h1>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-3 py-5 space-y-2">

                <NavLink
                    to="/admin"
                    end
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-slate-800"
                        }`
                    }
                >
                    <FaTachometerAlt />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink
                    to="/admin/roles"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-slate-800"
                        }`
                    }
                >
                    <FaUserShield />
                    <span>Roles</span>
                </NavLink>

                <NavLink
                    to="/admin/users"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-slate-800"
                        }`
                    }
                >
                    <FaUsers />
                    <span>Users</span>
                </NavLink>

                <NavLink
                    to="/admin/customers"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-slate-800"
                        }`
                    }
                >
                    <FaUserFriends />
                    <span>Customers</span>
                </NavLink>

                <NavLink
                    to="/admin/transporters"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-slate-800"
                        }`
                    }
                >
                    <FaTruck />
                    <span>Transporters</span>
                </NavLink>

                <NavLink
                    to="/admin/bookings"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-slate-800"
                        }`
                    }
                >
                    <FaClipboardList />
                    <span>Bookings</span>
                </NavLink>

                <NavLink
                    to="/admin/settings"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-slate-800"
                        }`
                    }
                >
                    <FaClipboardList />
                    <span>Setting </span>
                </NavLink>

            </nav>

            {/* Footer */}
            <div className="border-t border-slate-700 p-4 text-center text-xs text-slate-400">
                © 2026 Transport Hub
            </div>

        </aside>
    );
}

export default Sidebar;