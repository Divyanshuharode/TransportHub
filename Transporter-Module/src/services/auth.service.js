import api from "./api";

export const registerTransporter = (data) => api.post("/api/registerTransporter", data)
export const loginTransporter = (data) => api.post("/api/loginTransporter", data);

