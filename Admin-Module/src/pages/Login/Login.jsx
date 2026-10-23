import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const loginUser = async () => {
        let res = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({
                email: email,
                password: pass
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        const data = await res.json();

        if (data.success === true) {
            localStorage.setItem("token", data.data.token);
            await Swal.fire({
                icon: "success",
                title: "Login successful",
                text: "Welcome to TransportHub",
                width: "400px",
                padding: "1.5rem",
                confirmButtonText: "Go to dashboard",
                confirmButtonColor: "#2563eb",
                customClass: {
                    popup: "login-success-popup",
                },
            });
            navigate("/admin");
        } else {
            alert("incorrect password entered")
        }
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 p-4">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-600/30 blur-3xl"></div>
            <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

            <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl lg:grid-cols-2">
                <div className="hidden flex-col justify-between bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 p-10 text-white lg:flex">
                    <div>
                        <div className="mb-14 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-lg font-bold">TH</div>
                            <span className="text-xl font-semibold">TransportHub</span>
                        </div>

                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Admin workspace</p>
                        <h1 className="max-w-sm text-4xl font-bold leading-tight">Manage your transport business in one place.</h1>
                        <p className="mt-5 max-w-sm text-sm leading-6 text-blue-100">
                            Access bookings, customers, transporters and vehicles from your admin dashboard.
                        </p>
                    </div>

                    <p className="text-sm text-blue-200">Secure access for your team</p>
                </div>

                <div className="p-7 sm:p-10 lg:p-12">
                    <div className="mb-9 lg:hidden">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">TH</div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">TransportHub Admin</p>
                    </div>

                    <p className="text-sm font-semibold text-blue-600">Welcome back</p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900">Sign in to your account</h2>
                    <p className="mt-2 text-sm text-slate-500">Enter your details to continue to the dashboard.</p>

                    <div className="mt-8 space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                            <input
                                type="password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            />
                        </div>

                        <div className="text-right">
                            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">Forgot password?</button>
                        </div>

                        <button
                            onClick={loginUser}
                            className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                        >
                            Sign in
                        </button>
                    </div>

                    <p className="mt-8 text-center text-xs text-slate-400">© 2026 TransportHub Admin</p>
                </div>
            </div>
        </div>
    );
}
