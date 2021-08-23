import axios from 'axios';

export const confApi = axios.create({
    /* baseURL: 'http://localhost:8080/api' */
    baseURL: 'https://blaze-api.herokuapp.com/api'
    
});