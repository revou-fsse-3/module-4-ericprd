import axios from "axios";
import { getCookie } from "utils";

export function axiosInstance() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const tokenKey = import.meta.env.VITE_AUTHORIZE_KEY;
  
  const instance = axios.create({
    baseURL: baseUrl,
  })

  const tokenAuth = getCookie(tokenKey);

  instance.interceptors.request.use(
    (config) => {
      if (tokenAuth) {
        config.headers.Authorization = `Bearer ${tokenAuth}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  return instance;
}
