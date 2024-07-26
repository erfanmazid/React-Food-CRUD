import axios from "axios";

export const baseURL = "http://localhost:3000";

export const axiosInstans = axios.create({ baseURL });
