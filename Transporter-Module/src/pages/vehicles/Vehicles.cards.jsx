
import { FileText, CheckCircle, Clock } from "lucide-react";

function VehicleCards() {
    const cards = [
        { title: "Total Documents", count: "04", desc: "Uploaded documents", icon: FileText, color: "text-blue-600" },
        { title: "Verified Documents", count: "02", desc: "Successfully verified", icon: CheckCircle, color: "text-green-600" },
        { title: "Pending Documents", count: "01", desc: "Awaiting verification", icon: Clock, color: "text-yellow-600" },
    ];

    return (
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
                <div key={card.title} className="rounded-lg border border-gray-200 bg-white p-2">
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">{card.title}</p>
                        <card.icon size={16} className={card.color} />
                    </div>
                    <h2 className="mt-1 text-xl font-bold text-gray-900">{card.count}</h2>
                    <p className="mt-0.5 text-xs text-gray-500">{card.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default VehicleCards;
