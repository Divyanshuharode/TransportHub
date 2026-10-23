import api from "./api";

export const getTransporterCount = () => api.post("/allTrans");
export const totalCustomersApi = () => api.post("/api/totalCustomers");