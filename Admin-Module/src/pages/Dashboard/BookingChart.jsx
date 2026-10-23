import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";

const data = [
    { month: "Jan", bookings: 0 },
    { month: "Feb", bookings: 0 },
    { month: "Mar", bookings: 0 },
    { month: "Apr", bookings: 0 },
    { month: "May", bookings: 0 },
    { month: "Jun", bookings: 0 },
];

function BookingChart() {
    return (
        <div className="bg-white rounded-xl shadow p-6 h-96">
            <h2 className="text-xl font-semibold mb-6">
                Booking Overview
            </h2>

            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="bookings"
                        stroke="#2563eb"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BookingChart;