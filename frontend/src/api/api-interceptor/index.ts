import axios, { AxiosError } from "axios";
import { error } from "console";
import AuthService from "../../services/AuthService";


 
const $api = axios.create({
    withCredentials: true,
    baseURL: `${process.env.REACT_APP_API_KEY}/api`,
})


$api.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    
    return config;
})


$api.interceptors.response.use((config) => {
    return config
}, async (error : AxiosError) => {


    
    const originalRequest = error.config; 

    console.log('originalRequest', error.config);
    
    
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