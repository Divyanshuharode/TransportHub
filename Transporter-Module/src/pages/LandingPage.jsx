import { useState } from "react";
import TransportSlider from "../component/TransportSlider"

function LandingPage() {
    const [slide, setSlide] = useState(0);

    const slides = [
        { title: "Welcome to Transport Hub", text: "Find the right transport for your business.", color: "from-blue-800 to-blue-500", icon: "🚛" },
        { title: "Grow Your Transport Business", text: "Connect with customers and get more bookings.", color: "from-indigo-800 to-blue-600", icon: "📦" },
        { title: "Safe & Reliable Transportation", text: "Move your goods with trusted transport partners.", color: "from-slate-800 to-slate-500", icon: "🛣️" },
        { title: "Your Business, Your Growth", text: "Join Transport Hub and expand your network.", color: "from-orange-700 to-orange-400", icon: "📈" },
        { title: "Transport Made Simple", text: "Easy booking, reliable service, better business.", color: "from-cyan-800 to-blue-500", icon: "🤝" }
    ];

    const features = [
        { icon: "👥", title: "45 Crore+ Transport Hub Customers", text: "Connect with more customers" },
        { icon: "💳", title: "3-Day Secure Payments", text: "Reliable payment process" },
        { icon: "📉", title: "Low Cost of Doing Business", text: "Save more on operations" },
        { icon: "☎️", title: "One Click Support", text: "Help whenever you need it" },
        { icon: "🚚", title: "Easy Transport Booking", text: "Simple and quick process" }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800">

            {/* Navbar */}
            <nav className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-gray-200 px-6 py-4 md:px-12">

                <a href="/" className="flex items-center">
                    <img src="/transport-logo.png" alt="Transport Hub" width="100" height="60" />
                </a>

                <div className="flex flex-wrap items-center gap-5 text-sm font-medium">
                    <a href="#learn" className="hover:text-blue-600">Learn</a>
                    <a href="#grow" className="hover:text-blue-600">Grow</a>
                    <a href="#about" className="hover:text-blue-600">About</a>
                    <a href="#partners" className="hover:text-blue-600">Our Partners</a>
                    <a href="#fees" className="hover:text-blue-600">Fees & Commissions</a>
                </div>

                <div className="flex gap-2">
                    <a href="/login" className="border-2 border-blue-700 px-5 py-2 font-semibold text-blue-700 hover:bg-blue-50">
                        Login
                    </a>
                    <a href="/register" className="bg-blue-700 px-5 py-2 font-semibold text-white hover:bg-blue-800">
                        Register
                    </a>
                </div>
            </nav>

            {/* Image Slider */}
            {/* Image Slider */}
            <section className="mt-6 w-full">
                <TransportSlider />
            </section>

            {/* Features */}
            <section id="learn" className="mx-auto mt-6 grid max-w-6xl grid-cols-2 border border-gray-200 bg-white md:grid-cols-5">
                {features.map((item) => (
                    <div key={item.title} className="border-b border-r border-gray-200 px-3 py-5 text-center">
                        <p className="text-3xl">{item.icon}</p>
                        <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
                        <p className="mt-1 text-xs text-gray-500">{item.text}</p>
                    </div>
                ))}
            </section>

            {/* Success Stories and Reviews */}
            <section id="grow" className="mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-3">
                <div id="partners" className="rounded-lg border-2 border-gray-200 p-6 md:col-span-2">
                    <h2 className="text-center text-2xl font-bold">Transporter Success Stories</h2>
                    <p className="mt-2 text-center text-gray-500">Real growth. Better opportunities. More business.</p>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-lg bg-blue-50 p-4">
                            <p className="text-lg font-semibold text-blue-800">🚛 Grow Your Business</p>
                            <p className="mt-2 text-sm text-gray-600">Connect with customers and find new transport opportunities.</p>
                        </div>
                        <div className="rounded-lg bg-orange-50 p-4">
                            <p className="text-lg font-semibold text-orange-800">📈 Better Opportunities</p>
                            <p className="mt-2 text-sm text-gray-600">Manage your transport business from one place.</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border-2 border-gray-200 p-6">
                    <h2 className="text-center text-2xl font-bold">Transporter Reviews</h2>
                    <div className="mt-5 rounded-lg bg-gray-50 p-4">
                        <p className="text-yellow-500">★★★★★</p>
                        <p className="mt-2 text-sm text-gray-600">"A simple platform to explore new business opportunities."</p>
                        <p className="mt-3 text-sm font-semibold">Transport Partner</p>
                    </div>
                    <div className="mt-3 rounded-lg bg-gray-50 p-4">
                        <p className="text-yellow-500">★★★★★</p>
                        <p className="mt-2 text-sm text-gray-600">"Managing transport work is easier with one platform."</p>
                        <p className="mt-3 text-sm font-semibold">Transport Partner</p>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="bg-blue-50 px-5 py-8 text-center">
                <h2 className="text-2xl font-bold">Become a Transport Partner</h2>
                <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
                    Join Transport Hub to connect with customers, manage your vehicles and grow your transport business.
                </p>
                <a href="/register" className="mt-4 inline-block rounded-md bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800">
                    Register Now
                </a>
            </section>

            {/* Footer */}
            <footer id="fees" className="bg-gray-900 px-6 py-8 text-white md:px-12">
                <div className="grid gap-6 md:grid-cols-3">
                    <div>
                        <h3 className="text-xl font-bold">Transport Hub</h3>
                        <p className="mt-2 text-sm text-gray-400">Connecting goods, businesses and transport partners.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Quick Links</h3>
                        <div className="mt-2 flex flex-col gap-2 text-sm text-gray-400">
                            <a href="#learn" className="hover:text-white">Learn More</a>
                            <a href="#grow" className="hover:text-white">Success Stories</a>
                            <a href="/login" className="hover:text-white">Login</a>
                            <a href="/register" className="hover:text-white">Register</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold">Contact Information</h3>
                        <p className="mt-2 text-sm text-gray-400">Customer Support</p>
                        <p className="mt-1 text-sm text-gray-400">Company Information</p>
                        <p className="mt-1 text-sm text-gray-400">Terms & Conditions</p>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
                    © 2026 Transport Hub. All rights reserved.
                </div>
            </footer>

        </div>
    );
}

export default LandingPage;
