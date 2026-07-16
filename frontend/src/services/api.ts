import axios from "axios";

//Instance Axios commune à toute l'application
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application.json",
    },
});

export default api;