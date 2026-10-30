import api from "./api";

export const getCardsDataApi = () => api.post("/api/vehicles/count")
export const getVehiclesApi = () => api.post("/api/getvehicles");