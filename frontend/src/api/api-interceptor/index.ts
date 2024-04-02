import axios, { AxiosError } from "axios";
import { error } from "console";
import AuthService from "../../services/AuthService";

export const API_URL = `http://localhost:5000/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})


$api.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    
    return config;
})


$api.interceptors.response.use((config) => {
    return config
}, async (error : AxiosError) => {


    
    const originalRequest = error.config; 
    
    if (error.response.status === 401) {
        try {

            const response = await AuthService.refresh();
            localStorage.setItem("token", response.data.accessToken);
            
            return $api.request(originalRequest)    
        } catch (e) {
            return error;
        }
    }

    if (error.response.status === 403) {
        return error;
    }



    return Promise.reject(error)
})


export default $api;