function DashboardCard({ title, value, icon, color }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center justify-between ">

            <div>
                <h3 className="text-gray-500 text-sm">{title}</h3>

                <h2 className="text-3xl font-bold mt-2">
                    {value}
                </h2>

                <p className="text-green-600 text-sm mt-2">
                    ↑ 0% from last month
                </p>
            </div>

            <div className={`${color} h-10 w-12 rounded-xl flex items-center justify-center text-3xl`}>
                {icon}
            </div>

        </div>
    );
}

export default DashboardCard;