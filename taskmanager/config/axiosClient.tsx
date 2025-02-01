import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;

/* 
    Cliente de axios.
    Funcionalidad: Configuración básica y por defecto de axios.
*/
