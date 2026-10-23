import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import CustomerModal from "./CustomerModal";
import { CiEdit } from "react-icons/ci";
import { LuView } from "react-icons/lu";
import { TiUserAdd } from "react-icons/ti";
import { getCustomersApi, totalCustomersApi, activeCustomersApi, inActiveCustomersApi, addCustomerApi, deleteCustomerApi } from "../../services/customer.service"

const tableStyles = {
    headRow: { style: { minHeight: "48px", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" } },
    headCells: { style: { color: "#475569", fontSize: "12px", fontWeight: 600 } },
    rows: { style: { minHeight: "58px", color: "#334155", fontSize: "13px" }, highlightOnHoverStyle: { backgroundColor: "#f8fafc" } },
    pagination: { style: { borderTop: "1px solid #e2e8f0", color: "#64748b" } },
};

function Customers() {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [customer, setCustomer] = useState([]);
    const [totalCustomer, setTotalCustomer] = useState(0);
    const [activeCustomer, setActiveCustomer] = useState(0);
    const [inactiveCustomer, setInActiveCustomer] = useState(0);
    const [selectedCustomer, setSelectedCustomer] = useState(0);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        const results = await Promise.allSettled([
            getCustomersApi(),
            totalCustomersApi(),
            activeCustomersApi(),
            inActiveCustomersApi(),
        ]);
        console.log(results[0], results[1], results[2], results[3]);

        if (results[0].status === "fulfilled") {
            setCustomer(results[0].value.data.data ?? []);
        } else {
            setCustomer([]);
            console.log(results[0].reason);
        }

        if (results[1].status === "fulfilled") {
            setTotalCustomer(results[1].value.data.data?.[0]?.totalCustomer ?? 0);
        } else {
            setTotalCustomer(0);
            console.log(results[1].reason);
        }

        if (results[2].status === "fulfilled") {
            setActiveCustomer(results[2].value.data.data?.[0].activeCustomers ?? 0);
        } else {
            setActiveCustomer(0);
            console.log(results[2].reason);
        }

        if (results[3].status === "fulfilled") {
            setInActiveCustomer(results[3].value.data.data?.[0]?.inActiveCustomer ?? 0);
        } else {
            setInActiveCustomer(0);
            console.log(results[3].reason);
        }
    };
    const openAddModel = () => {
        setName("");
        setEmail("");
        setPhone("");
        setOpen(true);
    };

    const addCustomer = async () => {
        try {
            await addCustomerApi({
                customer_name: name,
                email: email,
                mobile_number: phone,
            });
            await fetchCustomers();
            setOpen(false);
            setName("");
            setEmail("");
            setPhone("");
        } catch (err) {
            console.log(err);
        }
    };

    const deleteCustomer = () => {
        deleteCustomerApi();
    }

    const columns = [
        {
            name: "ID",
            selector: item => item.customer_id,
            sortable: true,
        },
        {
            name: "Customer Name",
            selector: item => item.customer_name,
            cell: item => <span className="font-medium text-slate-800">{item.customer_name}</span>,
            sortable: true,
        },
        {
            name: "Email",
            selector: item => item.email,
            sortable: true,
        },
        {
            name: "Phone",
            selector: item => item.mobile_number,
            sortable: true,
        },
        {
            name: "Role",
            selector: item => item.role,
            sortable: true,
        },
        {
            name: "Status",
            selector: item => item.account_status,
            cell: item => (
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${item.account_status?.toLowerCase() === "active" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                    {item.account_status}
                </span>
            ),
        },
        {
            name: "Created At",
            selector: item => item.created_at,
            sortable: true,
        },
        {
            name: "Action",
            cell: row => (
                <div className="flex gap-2">
                    <button
                        onClick={() => {
                            setSelectedCustomer({
                                name: row.customer_name,
                                email: row.email,
                                phone: row.mobile_number,
                                city: row.city || "",
                            });
                            setOpen(true);
                        }}
                        className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
                    >
                        <LuView />

                    </button>
                    <button className="rounded-md bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-600 transition hover:bg-rose-100">
                        <CiEdit />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-full bg-slate-50 p-4 sm:p-1 lg:p-2">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="mt-1 text-l font-bold tracking-tight text-slate-900">Cutomers</h1>
                </div>
                <button
                    onClick={openAddModel}
                    className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                    <TiUserAdd size={18} /> Add
                </button>
            </div>


            <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Total customers</p>
                    <h2 className="mt-1 text-2xl font-bold text-slate-900">{totalCustomer}</h2>
                </div>

                <div className="rounded-lg border border-emerald-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Active</p>
                    <h2 className="mt-1 text-2xl font-bold text-emerald-700">{activeCustomer}</h2>
                </div>

                <div className="rounded-lg border border-rose-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">Inactive</p>
                    <h2 className="mt-1 text-2xl font-bold text-rose-600">{inactiveCustomer}</h2>
                </div>

                <div className="rounded-lg border border-blue-200 bg-white p-3">
                    <p className="text-xs font-medium text-slate-500">New customers</p>
                    <h2 className="mt-1 text-2xl font-bold text-blue-700">0</h2>
                </div>
            </div>


            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <DataTable
                    columns={columns}
                    data={customer}
                    customStyles={tableStyles}
                    pagination
                    highlightOnHover
                    responsive
                    persistTableHead
                    noDataComponent={<div className="py-10 text-sm text-slate-500">No customers found.</div>}
                />
            </div>

            <CustomerModal
                open={open}
                setOpen={setOpen}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                addCustomer={addCustomer}
            />
        </div>
    );
}

export default Customers;