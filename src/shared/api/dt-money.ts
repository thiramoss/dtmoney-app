import axios from "axios";
import { AppError } from "../helpers/AppError";

const baseURL = process.env.EXPO_PUBLIC_API_URL;
    

export const dtMoneyApi = axios.create({
    baseURL,
})

dtMoneyApi.interceptors.response.use((config) => config, (error) => {
    if(error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.message))
    } else {
        return Promise.reject(new AppError("Falha na requisição"));
    }
})