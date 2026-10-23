import api from "./api";

export const getCustomersApi = () => api.post("/api/customers");
export const totalCustomersApi = () => api.post("/api/totalCustomers");
export const activeCustomersApi = () => api.post("/api/activeCustomers");
export const inActiveCustomersApi = () => api.post("/api/inActiveCustomers");
export const addCustomerApi = (data) => api.post("/api/addCustomers", data);
// export const updateCustomer = (id, data) => api.put(`/api/customers/${id}`, data);
export const deleteCustomerApi = (customer_id) => api.post(`/api/deleteCustomers/:${customer_id}`);
