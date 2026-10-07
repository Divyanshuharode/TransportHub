import { useState } from "react";
import DataTable from "react-data-table-component";
import CustomerModal from "./CustomerModal";

import axios from "axios";
import { useEffect } from "react";

function Customers() {

    const [open, setOpen] = useState(false);

    const [customer, setCustomer] = useState([]);
    const [totalCustomer, setTotalCustomer] = useState([]);
    const [activeCustomers, setActiveCustomer] = useState([]);
    const [inActiveCustomers, setinActiveCustomer] = useState([]);

    const fetchCustomers = async () => {
        let res = await axios.post("http://localhost:3000/api/customers");
        let totalCustomer = await axios.post("http://localhost:3000/api/totalCustomers")
        let activeCustomers = await axios.post("http://localhost:3000/api/activeCustomers")
        let inActiveCustomers = await axios.post("http://localhost:3000/api/inActiveCustomers")
        setCustomer(res.data);
        setTotalCustomer(totalCustomer.data[0]);
        setActiveCustomer(activeCustomers.data[0])
        setinActiveCustomer(inActiveCustomers.data[0]);
    }
    useEffect(() => {
        fetchCustomers()
    }, [])

    const columns = [
        {
            name: "ID",
            selector: item => item.customer_id,
            sortable: true,
        },
        {
            name: "Customer Name",
            selector: item => item.customer_name,
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
        }, {
            name: "created_at",
            selector: item => item.created_at,
        },
        {
            name: "Action",
            cell: row => (
                <div className="flex gap-3">
                    <button
                        onClick={() => {
                            setCustomer(row);
                            setOpen(true);
                        }}
                        className="text-blue-600"
                    >
                        Edit
                    </button>

                    <button className="text-red-600">
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    const customers = [];

    const handleAdd = () => {
        setCustomer(null);
        setOpen(true);
    };

    const handleSave = (data) => {
        console.log(data);
    };

    return (
        <div className="p-6">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">

                <div>
                    <h1 className="text-2xl font-bold">
                        Customers
                    </h1>

                    <p className="text-gray-500">
                        Manage your customers
                    </p>
                </div>

                <button
                    onClick={handleAdd}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
                >
                    + Add Customer
                </button>

            </div>


            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

                <div className="bg-white p-5 rounded-xl shadow">
                    <p className="text-gray-500">Total Customers</p>
                    <h2 className="text-2xl font-bold">{totalCustomer.totalCustomer}</h2>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                    <p className="text-gray-500">Active</p>
                    <h2 className="text-2xl font-bold text-green-600">{activeCustomers.activeCustomers}</h2>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                    <p className="text-gray-500">Inactive</p>
                    <h2 className="text-2xl font-bold text-red-600">{inActiveCustomers.inActiveCustomer}</h2>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                    <p className="text-gray-500">New Customers</p>
                    <h2 className="text-2xl font-bold text-indigo-600">0</h2>
                </div>
            </div>


            {/* DataTable */}
            <div className="bg-white rounded-xl shadow">

                <DataTable
                    // title="Customer List"
                    columns={columns}
                    data={customer}
                    pagination
                    highlightOnHover
                    responsive
                    persistTableHead
                    theme="dark"
                />

            </div>


            {/* Customer Modal */}
            <CustomerModal
                open={open}
                setOpen={setOpen}
                customer={customer}
                onSave={handleSave}
            />

        </div>
    );
}

export default Customers;