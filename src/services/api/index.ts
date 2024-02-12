import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import handleResponseError from "../handleResponseError";


// let BASE_URL = "https://api.ourgwala.com/admin/UserModule";
let BASE_URL = "https://adminapi.ourgwala.com/";

export { BASE_URL };


const requestHeaders: { [key: string]: string } = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};


const Axios: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: requestHeaders,
  // withCredentials: true,
});

// Add a request interceptor
Axios.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
Axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // if (error.response.status === 401 || error.response.status === 403) {
    //     handleResponseError(error.response)
    //     handleClearLocalStorage()
    //     window.location.href = '/login'
    //     return
    // }
    handleResponseError(error.response);
    throw error;
    // return error;
  }
);

export default Axios;
