function Navbar() {
    return (
        <header className="h-16 bg-slate-800 text-slate-100 border-slate-200 flex items-center justify-between px-6 ">

            {/* Left Side */}
            <div>
                <h1 className="text-2xl font-bold text-slate-100">
                    Admin Panel
                </h1>
                <p className="text-sm text-slate-300">
                    Welcome back 👋
                </p>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">

                <input
                    type="text"
                    placeholder="Search..."
                    className="w-64 rounded-lg border border-slate-300 px-4 py-2 text-sm
                               focus:outline-none focus:ring-2 focus:ring-indigo-900
                               focus:border-indigo-100"
                />

                <button
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-white
                               hover:bg-indigo-700 transition"
                >
                    Logout
                </button>

            </div>

        </header>
    );
}

export default Navbar;