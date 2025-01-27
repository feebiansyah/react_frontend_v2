import React from "react";
import axios from "axios";

const api = axios.create( {
    baseURL: "http://10.199.133.180:8000/api/v1",
    headers: {
        "Content-Type" : "application/json"
    }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("auth_token");
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;