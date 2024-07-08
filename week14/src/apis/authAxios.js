import axios from "axios";
import { getNewRefreshToken } from "./user";

const baseURL = `http://yangzzago.kro.kr:3000`;


export const getAuthAxios = (token) => {
    const authAxios = axios.create({
        baseURL: baseURL,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    authAxios.interceptors.response.use(
        (response) => response,
        async (error) =>{
            const result = getNewRefreshToken();
            error.config.headers.Authorization = result.accessToken;
            localStorage.setItem('access', result.accessToken);
            localStorage.setItem('refresh', result.refreshToken);
            return await axios.get(error.config.url, error.config);
        }
    );
    return authAxios;
}