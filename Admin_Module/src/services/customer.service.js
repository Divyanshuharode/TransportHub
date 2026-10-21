import api from "./api";

export const getCustomers = () => api.post("/api/customers");
export const addCustomer = (data) => api.post("/api/addCustomers", data);
export const updateCustomer = (id, data) => api.put(`/api/customers/${id}`, data);
export const deleteCustomer = (id) => api.delete(`/api/customers/${id}`);
