import api from "./api";

export const getUsers = () => api.get("/api/users");
export const addUser = (data) => api.post("/api/users", data);
export const deleteUser = (user_id) => api.delete(`/api/users/${user_id}`);
export const updateUserStatus = (user_id, data) => api.put(`/users/status/${user_id}`, data);
export const updateUser = (user_id, data) => api.put(`/api/users/${user_id}`, data);
export const getUsersById = (user_id) => api.get(`/api/users/${user_id}`);  