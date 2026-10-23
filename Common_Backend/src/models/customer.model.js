const connection = require("../config/db");

const getCustomersModel = (cbfn) => {
    const query = "SELECT * FROM customers";
    connection.query(query, cbfn);
};

const totalCustomersModel = (cbfn) => {
    const query = "SELECT COUNT(*) AS totalCustomer FROM customers";
    connection.query(query, cbfn);
};

const activeCustomersModel = (cbfn) => {
    const query = "SELECT COUNT(*) AS activeCustomers FROM customers WHERE account_status = ?";
    connection.query(query, ["active"], cbfn);
};

const inActiveCustomersModel = (cbfn) => {
    const query = "SELECT COUNT(*) AS inActiveCustomer FROM customers WHERE account_status = ?";
    connection.query(query, ["inactive"], cbfn);
};

const addCustomerModel = (data, cbfn) => {
    const query = "INSERT INTO customers(customer_name, email, mobile_number) VALUES (?, ?, ?)";
    connection.query(query, [data.customer_name, data.email, data.mobile_number], cbfn);
};

const updateCustomerModel = (customer_id, data, cbfn) => {
    const query = "update customers set customer_name = ? where customer_id = ?";
    connection.query(query, [data, customer_id], cbfn)
}

const deleteCustomerModel = (customer_id, cbfn) => {
    const query = "delete from customers where customer_id = ? ";
    connection.query(query, [customer_id], cbfn);
}

module.exports = {
    getCustomersModel,
    totalCustomersModel,
    activeCustomersModel,
    inActiveCustomersModel,
    addCustomerModel,
    updateCustomerModel,
    deleteCustomerModel
};