import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <header className="flex min-h-16 items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 sm:px-6">
            <div>
                <h1 className="text-sm font-semibold text-slate-800">Admin Panel</h1>
                <p className="text-xs text-slate-500">Welcome back, Admin</p>
            </div>
            <div className="flex items-center gap-3">
                <input type="text" placeholder="Search..." className="hidden w-52 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 sm:block" />
                <button onClick={logout} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">Logout</button>
            </div>
        </header>
    );
}

export default Navbar;
