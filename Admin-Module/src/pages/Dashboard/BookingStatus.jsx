import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Completed", value: 10 },
    { name: "Pending", value: 4 },
    { name: "In Transit", value: 7 },
    { name: "Cancelled", value: 1 },
];

function BookingStatus() {
    return (
        <div className="h-80 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:h-96 sm:p-6">
            <div className="mb-5">
                <h2 className="text-lg font-semibold text-slate-900">Booking status</h2>
                <p className="mt-1 text-sm text-slate-500">Current booking distribution</p>
            </div>
            <ResponsiveContainer width="100%" height="78%">
                <BarChart data={data} layout="vertical" margin={{ top: 4, right: 12, left: 4, bottom: 4 }}>
                    <CartesianGrid stroke="#e2e8f0" horizontal={false} />
                    <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 11 }} />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={82} tick={{ fill: "#475569", fontSize: 11 }} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)" }} />
                    <Bar dataKey="value" fill="#4568e8" radius={[0, 6, 6, 0]} barSize={18} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BookingStatus;
