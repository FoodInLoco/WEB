import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = localStorage.getItem("@FLAuth:token")
  if (token) {
    api.defaults.headers.common[
      "Authorization"
    ] = `Baerer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      console.log(error)
    }
    throw error;
  }
);

export default api;