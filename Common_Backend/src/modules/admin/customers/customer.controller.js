const {
    getCustomersModel,
    totalCustomersModel,
    activeCustomersModel,
    inActiveCustomersModel,
    addCustomerModel,
    updateCustomerModel,
    deleteCustomerModel
} = require("./customer.model");

const getCustomers = (req, res, next) => {
    getCustomersModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Customers fetched successfully", data: result });
    });
};

const totalCustomers = (req, res, next) => {
    totalCustomersModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Total customers fetched successfully", data: result });
    });
};

const activeCustomers = (req, res, next) => {
    activeCustomersModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Active customers fetched successfully", data: result });
    });
};

const inActiveCustomers = (req, res, next) => {
    inActiveCustomersModel((err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Inactive customers fetched successfully", data: result });
    });
};

const addCustomers = (req, res, next) => {
    const data = { customer_name: req.body.customer_name, email: req.body.email, mobile_number: req.body.mobile_number };

    addCustomerModel(data, (err, result) => {
        if (err) return next(err);
        res.send({ success: true, message: "Customer added successfully", data: result });
    });
};

const updateCustomer = (req, res, next) => {
    const customer_id = req.params.customer_id;
    const data = []
    updateCustomerModel(customer_id, data, (err, result) => {
        if (err) { return next(err) }
        res.send({ success: true, message: "Customer updated succesfully", data: result })
    })
}

const deleteCustomer = (req, res, next) => {
    const customer_id = req.params.customer_id;
    deleteCustomerModel(customer_id, (err, result) => {
        if (err) next(err)
        res.send({ success: true, message: "customer deleted succsessfully", data: result })
    });
}

module.exports = { getCustomers, totalCustomers, activeCustomers, inActiveCustomers, addCustomers, deleteCustomer };