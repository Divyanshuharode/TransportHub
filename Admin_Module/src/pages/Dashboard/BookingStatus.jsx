import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Completed", value: 25 },
    { name: "Pending", value: 25 },
    { name: "In Progress", value: 25 },
    { name: "Cancelled", value: 25 },
];

const COLORS = [
    "#22c55e", // Green
    "#f59e0b", // Yellow
    "#3b82f6", // Blue
    "#ef4444", // Red
];

function BookingStatus() {
    return (
        <div className="bg-white rounded-xl shadow p-6 h-96">
            <h2 className="text-xl font-semibold mb-6">
                Booking Status
            </h2>

            <ResponsiveContainer width="100%" height="85%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BookingStatus;