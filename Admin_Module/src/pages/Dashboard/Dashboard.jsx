import { useEffect, useState } from "react";

import DashboardCards from "../../components/cards/DashboardCards";
import BookingChart from "./BookingChart";
import BookingStatus from "./BookingStatus";

import { getTransporterCount } from "../../services/dashboard.service";

function Dashboard() {
    const [allTrans, setallTrans] = useState([]);

    const getTrans = async () => {
        try {
            const res = await getTransporterCount();
            console.log(res.data);
            setallTrans(res.data.data[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTrans();
    }, []);

    return (
        <div className="bg-gray-400 p-6">

            <h1 className="text-3xl font-bold">Dashboard</h1>

            <p className="text-gray-500 mt-1">
                Welcome back, Admin!
            </p>

            <div className="mt-6">
                <DashboardCards allTrans={allTrans} />
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6">

                <div className="col-span-2">
                    <BookingChart />
                </div>

                <div>
                    <BookingStatus />
                </div>

            </div>
        </div>
    );
}

export default Dashboard;