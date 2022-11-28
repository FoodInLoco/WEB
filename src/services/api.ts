import axios, { AxiosRequestConfig } from 'axios';
import { handleErrors } from '../errors/errorHandler';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const auth: any = localStorage.getItem("@FLAuth:token")
  if (auth) {
    api.defaults.headers.common[
      "Authorization"
    ] = `bearer ${JSON.parse(auth)?.token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
    }
    throw error;
  }
);

export default api;