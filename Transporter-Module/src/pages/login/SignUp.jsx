import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { registerTransporter } from "../../services/auth.service"
import Swal from 'sweetalert2';

function TransporterRegister() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        transporter_name: "",
        email: "",
        mobile_number: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await registerTransporter(form)

        if (result.data.success === true) {
            await Swal.fire({
                icon: "success",
                title: "registration successfull ",
                text: "you can your account",
                timer: 2000,
                confirmButtonText: "login account"
            })
            navigate("/login");
        }
        else {
            await Swal.fire({
                icon: "error",
                title: "OOPS Somthing Went Wrong",
                text: "please try again",
                timer: 1000,
                confirmButtonText: "ok"
            })
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
                <h2 className="mb-2 text-2xl font-bold text-gray-800">Transporter Register</h2>
                <p className="mb-5 text-sm text-gray-500">Create your transporter account</p>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">Transporter Name</label>
                    <input type="text" name="transporter_name" value={form.transporter_name} onChange={handleChange} placeholder="Enter name" required className="w-full rounded-lg border p-2 outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter email" required className="w-full rounded-lg border p-2 outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">Mobile Number</label>
                    <input type="tel" name="mobile_number" value={form.mobile_number} onChange={handleChange} placeholder="Enter mobile number" required className="w-full rounded-lg border p-2 outline-none focus:border-blue-500" />
                </div>

                <div className="mb-5">
                    <label className="mb-1 block text-sm font-medium">Password</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter password" required className="w-full rounded-lg border p-2 outline-none focus:border-blue-500" />
                </div>

                <button type="submit" className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700">
                    Register
                </button>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?
                    <a href="/login" className="font-medium text-blue-600">Login</a>
                </p>
            </form>
        </div>
    );
}

export default TransporterRegister;
