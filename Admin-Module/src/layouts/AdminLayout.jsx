import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function AdminLayout() {
    return (
        <div className="flex h-screen bg-gray-300">

            <Sidebar />

            <div className="flex flex-col flex-1 overflow-hidden">

                <Navbar />

                <div className="flex-1 overflow-y-auto ">
                    <Outlet />
                </div>

                <Footer />

            </div>

        </div>
    );
}

export default AdminLayout;