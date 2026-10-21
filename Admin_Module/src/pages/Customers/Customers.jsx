import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import CustomerModal from "./CustomerModal";

const tableStyles = {
    headRow: { style: { minHeight: "48px", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" } },
    headCells: { style: { color: "#475569", fontSize: "12px", fontWeight: 600 } },
    rows: { style: { minHeight: "58px", color: "#334155", fontSize: "13px" }, highlightOnHoverStyle: { backgroundColor: "#f8fafc" } },
    pagination: { style: { borderTop: "1px solid #e2e8f0", color: "#64748b" } },
};

function Customers() {
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const fetchCustomers = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/customers");
            setCustomer(Array.isArray(res.data.data) ? res.data.data : []);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

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
                        Edit
                    </button>
                    <button className="rounded-md bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-600 transition hover:bg-rose-100">
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    const handleAdd = () => {
        setSelectedCustomer(null);
        setOpen(true);
    };

    const handleSave = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-full bg-slate-50 p-4 sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Customer management</p>
                    <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">Customers</h1>
                    <p className="mt-1 text-sm text-slate-500">Manage customer accounts and contact details.</p>
                </div>
                <button
                    onClick={handleAdd}
                    className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                    + Add customer
                </button>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Total customers</p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900">5</h2>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Active</p>
                    <h2 className="mt-2 text-3xl font-bold text-emerald-700">3</h2>
                </div>
                <div className="rounded-xl border border-rose-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">Inactive</p>
                    <h2 className="mt-2 text-3xl font-bold text-rose-600">2</h2>
                </div>
                <div className="rounded-xl border border-blue-200 bg-white p-5">
                    <p className="text-sm font-medium text-slate-500">New customers</p>
                    <h2 className="mt-2 text-3xl font-bold text-blue-700">0</h2>
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
                customer={selectedCustomer}
                onSave={handleSave}
            />
        </div>
    );
}

export default Customers;