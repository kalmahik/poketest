import axios from "axios";

const BASE_API = 'https://pokeapi.co/api/v2/'

export const axiosInstance = axios.create({
    baseURL: BASE_API,
});
