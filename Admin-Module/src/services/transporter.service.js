import api from "./api";

export const getTransportersApi = () => api.post("/api/allTransporter");
export const totalTransporterApi = () => api.post("/api/totalTransporter");
export const activeTransporterApi = () => api.post("/api/activeTransporter");
export const inActiveTransporterApi = () => api.post("/api/inActiveTransporter");