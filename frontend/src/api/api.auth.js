import axios from "axios";

const AuthService = {
    login (email, password) {
        return axios.post("/api/login", {email, password});
    },
    refreshToken() {
        return axios.get("/api/refresh");
    },
    logout() {
        return axios.post("api/logout");
    }
}

export default AuthService;