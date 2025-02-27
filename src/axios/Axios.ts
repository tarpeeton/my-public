import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'https://medyordam.result-me.uz/api',
  timeout: 30000,
  headers: {"Accept-Language" : ""}
});



