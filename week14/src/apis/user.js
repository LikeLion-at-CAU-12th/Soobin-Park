import axios from 'axios';
import { getAuthAxios } from './authAxios';
// import 

const baseURL = `http://yangzzago.kro.kr:3000`;

export const signUp = async (id, pw, name, age) => {
    const result = await axios.post(`${baseURL}/signup`, {
        id, 
        pw, 
        name, 
        age,
    });
    return result;
};

export const login = async (id, pw) => {
    const result = await axios.post(`${baseURL}/login`, {
        id, 
        pw,
    });
    console.log(result.data);
    return result.data;
}

export const getMyPage = async () => {
    // try{
    // const access = localStorage.getItem('access');
    // const result = await axios.get(`${baseURL}/mypage`, {
    //     headers: {
    //         Authorization: `Bearer ${access}`,
    //     }
    // });
    // return result.data;
    // } catch (error) {
    //     if(error.response.status === 401){
    //         //토큰이 만료되었을 경우
    //         const response = await getNewRefreshToken();
    //         localStorage.setItem('access', response.accessToken);
    //         localStorage.setItem('refresh', response.refreshToken);
    //         //새로운 토큰로 로다시 요청
    //         const newResult = await axios.get(`${baseURL}/mypage`, {
    //             headers: {
    //                 Authorization: `Bearer ${response.accessToken}`,
    //             }
    //         });
    //         return newResult.data;
    //     } else {
    //         console.log(error);
    //     }
    // }
    const autoAxios = getAuthAxios(localStorage.getItem('access'));
    const result = await autoAxios.get('/mypage');
    return result.data;
}

export const getNewRefreshToken = async () => {
    try{
        const accessToken = localStorage.getItem('access');
        const refreshToken = localStorage.getItem('refresh');

        const result = await axios.post(`${baseURL}/refresh`, {
            refreshToken,
        }, 
        {   
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    return result.data;
    } catch (error) {
        //토큰이 만료되었을 경우
        alert("Token is expired. Please login again.");
    }
};
