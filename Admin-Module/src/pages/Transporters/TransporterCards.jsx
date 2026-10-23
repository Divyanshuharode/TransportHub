function TransporterCards({ totalTransporter, activeTransporter, inactiveTransporter }) {
    return (
        <>
            <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Total transporters</p>
                    <h2 className="mt-1 text-2xl font-bold text-slate-900">{totalTransporter}</h2>
                </div>

                <div className="rounded-lg border border-emerald-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Active transporters</p>
                    <h2 className="mt-1 text-2xl font-bold text-emerald-700">{activeTransporter}</h2>
                </div>

                <div className="rounded-lg border border-blue-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Inactive transporters</p>
                    <h2 className="mt-1 text-2xl font-bold text-blue-700">{inactiveTransporter}</h2>
                </div>

                <div className="rounded-lg border border-amber-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Vehicles on route</p>
                    <h2 className="mt-1 text-2xl font-bold text-amber-600">5</h2>
                </div>
            </div>

            <div className="mb-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <h2 className="mb-3 text-sm font-semibold text-slate-900">Vehicle status</h2>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="text-slate-600">Available</span>
                            <span className="font-semibold text-slate-900">7</span>
                        </div>

                        <div className="flex justify-between text-xs">
                            <span className="text-slate-600">On route</span>
                            <span className="font-semibold text-slate-900">4</span>
                        </div>

                        <div className="flex justify-between text-xs">
                            <span className="text-slate-600">Maintenance</span>
                            <span className="font-semibold text-slate-900">1</span>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <h2 className="mb-3 text-sm font-semibold text-slate-900">Recent activity</h2>

                    <div className="flex min-h-14 items-center justify-center rounded-md bg-slate-50 text-xs text-slate-500">
                        No recent activity
                    </div>
                </div>
            </div>
        </>
    );
}

export default TransporterCards;
