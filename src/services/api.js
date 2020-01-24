import axios from 'axios';

const api = axios.create( {
    baseURL: 'http://localhost:3333',
} ); // Criou o axios Definindo a baseURL para o localhost:3333 

export default api;