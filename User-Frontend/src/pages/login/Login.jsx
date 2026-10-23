import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">

                <h1 className="text-3xl font-bold text-center text-gray-800">
                    TransportHub
                </h1>

                <p className="text-center text-gray-500 mt-2 mb-8">
                    Login to your account
                </p>

                <form className="space-y-5">

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="text-right">
                        <a href="#" className="text-blue-600 text-sm">
                            Forgot Password?
                        </a>
                    </div>

                    <Link to='/transporter'><button
                        type="button"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
                    >
                        Login
                    </button></Link>

                    <p className="text-center text-gray-600 text-sm">
                        Don't have an account?
                        <a href="#" className="text-blue-600 font-semibold ml-1">
                            Register
                        </a>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Login;