import { useState, useEffect } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import {
    getTransportersApi,
    totalTransporterApi,
    activeTransporterApi,
    inActiveTransporterApi,
} from "../../services/transporter.service";
import TransporterCards from "./TransporterCards";
import TransporterTable from "./TransporterTable";

function Transporters() {
    const [transporters, setTransporters] = useState([]);
    const [totalTransporter, setTotalTransporter] = useState(0);
    const [activeTransporter, setActiveTransporter] = useState(0);
    const [inactiveTransporter, setInActiveTransporter] = useState(0);

    useEffect(() => {
        fetchTransporters();
    }, []);

    const fetchTransporters = async () => {
        try {
            const response = await getTransportersApi();
            setTransporters(response.data.data);

            const total = await totalTransporterApi();
            setTotalTransporter(total.data.data[0].totaltransporter);

            const active = await activeTransporterApi();
            setActiveTransporter(active.data.data[0].activetransporter);

            const inactive = await inActiveTransporterApi();
            setInActiveTransporter(inactive.data.data[0].inActivetransporter);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="min-h-full bg-slate-50 p-4 sm:p-6 lg:p-4">
            <div className="mb-6 h-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="mt-1 text-l font-bold tracking-tight text-slate-900">Transporters</h1>
                </div>
                <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 flex items-center justify-center gap-2 ">
                    <AiOutlineUsergroupAdd size={20} /> Add
                </button>
            </div>

            <TransporterCards
                totalTransporter={totalTransporter}
                activeTransporter={activeTransporter}
                inactiveTransporter={inactiveTransporter}
            />

            <TransporterTable transporters={transporters} />
        </div>
    );
}

export default Transporters;
