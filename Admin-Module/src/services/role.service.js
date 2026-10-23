import api from "./api";

export const getRoles = () => api.get("/viewroles");
export const addRole = (data) => api.post("/addroles", data);
export const updateRole = (id, data) => api.patch(`/updaterole/${id}`, data);
export const deleteRole = (id) => api.delete(`/deleterole/${id}`);