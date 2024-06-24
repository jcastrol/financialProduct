import axios from 'axios';
const URL = 'http://localhost:3002'; // Reemplaza esta URL con la base URL del API
const api = axios.create({
    baseURL: `${URL}/bp`, 
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;