import React from 'react'
import Sidebar from '../component/sidebar/sidebar'
import Dashboard from '../pages/dashboard/Dashboard'
function TransporterLayout() {
    return (
        <div className="flex h-screen bg-gray-300">

            <Sidebar />

            <div className="flex flex-col flex-1 overflow-hidden">

                {/* <Navbar /> */}

                <div className="flex-1 overflow-y-auto ">
                    <Dashboard />
                    {/* <Outlet /> */}
                </div>

                {/* <Footer /> */}

            </div>

        </div >
    )
}

export default TransporterLayout;