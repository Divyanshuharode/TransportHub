import { Outlet } from 'react-router-dom';
import Sidebar from '../component/sidebar/sidebar'
import Navbar from '../component/navbar/Navbar';

function TransporterLayout() {
    return (
        <div className="flex h-screen bg-gray-300">

            <Sidebar />

            <div className="flex flex-col flex-1 overflow-hidden">

                <Navbar />

                <div className="flex-1 overflow-y-auto ">
                    <Outlet />
                </div>

                {/* <Footer /> */}

            </div>

        </div >
    )
}

export default TransporterLayout;