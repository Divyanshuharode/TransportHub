import api from "./api";

export const getTransporterCount = () => api.get("/allTrans");