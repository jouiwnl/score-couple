import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
export const API_KEY = 'c192d55728dabd6400055341d5b90bf9';

export const http = axios.create({
    baseURL: API_URL
});
