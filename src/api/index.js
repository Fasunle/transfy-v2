import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_BASE_URL;


export const loginUser = async ({ email, password }) => {

    const data = await axios.post(`${BASE_URL}/login`, {
        email,
        password
    });
    return data;
}


export const logoutUser = async ({id}) => {

    const data = await axios.post(`${BASE_URL}/logout`, {
        id
    });
    return data;
}

export const getInfo = async () => {

    const data = await axios.get(`${BASE_URL}/get-info`);
    return data;
}

export const userOrders = async ({id}) => {

    const data = await axios.post(`${BASE_URL}/user-orders`, {id});
    return data;
}