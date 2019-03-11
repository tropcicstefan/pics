import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f796c978c4c0a23197b770f2e7e8e9e0348b47e3bea0193633e149bec6a08c20'
    }
});