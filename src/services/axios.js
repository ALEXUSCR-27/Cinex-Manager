import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3307', 
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use (
    (response) => {
        return response;
    },
    (error) => {
        alert("ERROR => ",error)
        return Promise.reject(error);
    }
)
export default api;