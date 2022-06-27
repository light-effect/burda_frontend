import axios from 'axios'

const domain = import.meta.env.VITE_API_DOMAIN;

export default axios.create({
    baseURL: domain,
    headers: {
        Accept: 'application/json'
    },
    withCredentials: true
});