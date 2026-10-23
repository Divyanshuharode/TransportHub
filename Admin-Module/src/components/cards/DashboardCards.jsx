import DashboardCard from "./DashboardCard";

import {
    Truck,
    Users,
    ClipboardList,
    IndianRupee,
} from "lucide-react";

function DashboardCards({ transporterCount }) {
    return (
        <div className="grid grid-cols-4 gap-4">

            <DashboardCard
                title="Total Transporters"
                value={transporterCount}
                icon={<Truck />}
                color="bg-blue-100 text-blue-600"
            />

            <DashboardCard
                title="Total Customers"
                value="2"
                icon={<Users />}
                color="bg-green-100 text-green-600"
            />

            <DashboardCard
                title="Total Bookings"
                value="5"
                icon={<ClipboardList />}
                color="bg-purple-100 text-purple-600"
            />

            <DashboardCard
                title="Total Revenue"
                value="₹15.5 CR"
                icon={<IndianRupee />}
                color="bg-yellow-100 text-yellow-600"
            />

        </div>
    );
}

export default DashboardCards;