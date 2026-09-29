import axios from "axios";
import { Platform } from "react-native";

const baseURL = "https://localhost:3001";
    

export const dtMoneyApi = axios.create({
    baseURL,
})