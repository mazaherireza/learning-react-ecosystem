import axios from "axios";

const BASE_URL = "https://react-mini-projects-api.classbon.com";

// Used for register and login services
export const httpService = axios.create({
  baseURL: BASE_URL,
});

export const httpInterceptedService = axios.create({
  baseURL: BASE_URL,
});

httpInterceptedService.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token)
      config.headers = {
        Authorization: `Beares ${token}`,
      };
    return config;
  },
  (error) => Promise.reject(error)
);