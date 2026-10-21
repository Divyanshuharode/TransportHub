import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
        // console.log(data)

        // console.log("Status:", res.status);
        // console.log("Response:", data);

        if (data.success === true) {
            localStorage.setItem("token", data.data.token);
            navigate("/admin");
        } else {
            alert("incorrect password entered")
        }
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/13551577/pexels-photo-13551577.jpeg')", }}
        >
            <div className="w-full max-w-sm bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-white text-center">Transport Booking System</h1>
                <p className="text-center text-white mt-2 mb-6">Admin Login</p>

                <div className="mb-4">
                    <label className="block text-white mb-2"> Email </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full p-3 rounded-lg outline-none bg-white/20 text-white placeholder-white border border-white/40"
                    />
                </div>

                <div className="mb-2">
                    <label className="block text-white mb-2"> Password </label>
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full p-3 rounded-lg outline-none bg-white/20 text-white placeholder-white border border-white/40"
                    />
                </div>

                <div className="text-right mb-5">
                    <button className="text-blue-200 hover:text-white">
                        Forgot Password?
                    </button>
                </div>

                <button
                    onClick={() => loginUser()}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold duration-300"
                > Login
                </button>
            </div>
        </div>
    );
}
