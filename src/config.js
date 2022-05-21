import axios from 'axios';

export const API_KEY = 'c192d55728dabd6400055341d5b90bf9';
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const API_URL_ID = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

export const http = axios.create({
    baseURL: API_URL
});

export const httpApi = axios.create({
    baseURL: `http://localhost:8080/`
})
