import $api from "../api/api-interceptor";
import axios, { AxiosResponse } from "axios";
import { AuthResponse } from "./Auth";


import { API_URL } from "../api/api-interceptor";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password})
    }

    static async registration(email: string, password: string): Promise<any> {
        
        return await $api.post('/registration', {email, password});       

    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }

    static async refresh(): Promise<AxiosResponse<AuthResponse>> {
        return axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
    }
}


// const AuthService = {
//     login (email, password) {
//         return axios.post("http://localhost:5000/api/login", {email, password});
//     },
//     refreshToken() {
//         return axios.get("http://localhost:5000/api/refresh");
//     },
//     logout() {
//         return axios.post("http://localhost:5000/api/logout");
//     }
// }

