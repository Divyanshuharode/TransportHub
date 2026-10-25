
import { Menu, Bell, Search, UserRound, ChevronDown } from "lucide-react";

export default function TransporterNavbar() {
    return (
        <nav className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 sm:px-6">

            {/* Left Section */}
            <div className="flex items-center gap-3">
                <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100">
                    <Menu size={22} />
                </button>

                <div>
                    <h1 className="text-lg font-bold text-slate-900">Dashboard</h1>
                    <p className="text-xs text-slate-500">Manage your transport business</p>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 sm:gap-5">

                {/* Search */}
                <div className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 md:flex">
                    <Search size={17} className="text-slate-400" />
                    <input type="text" placeholder="Search..." className="w-32 text-sm outline-none placeholder:text-slate-400" />
                </div>

                {/* Notification */}
                <button className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100">
                    <Bell size={21} />
                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                {/* Profile */}
                <div className="flex items-center gap-2 border-l border-slate-200 pl-3 sm:pl-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                        <UserRound size={20} />
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-slate-800">Transporter Name</p>
                        <p className="text-xs text-slate-500">Transport Partner</p>
                    </div>

                    <ChevronDown size={16} className="hidden text-slate-500 sm:block" />
                </div>

            </div>
        </nav>
    );
}
