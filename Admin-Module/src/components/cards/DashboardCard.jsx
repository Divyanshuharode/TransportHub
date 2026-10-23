
function DashboardCard({ title, value, icon, color }) {
    return (
        <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3 shadow-sm">

            <div>
                <h3 className="text-xs font-medium text-gray-500">
                    {title}
                </h3>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                    {value}
                </h2>

                <p className="mt-1 text-xs text-green-600">
                    ↑ 2% from last month
                </p>
            </div>

            <div className={`${color} flex h-9 w-9 items-center justify-center rounded-lg text-xl`}>
                {icon}
            </div>

        </div>
    );
}

export default DashboardCard;
