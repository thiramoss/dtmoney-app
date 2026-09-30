import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL;
    

export const dtMoneyApi = axios.create({
    baseURL,
})