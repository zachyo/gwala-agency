import axios from "axios"

export const gwalaAxios = axios.create({
    baseURL: "https://ourgwala-api-w37c8.ondigitalocean.app"
})

const newGwalaAxios = axios.create({
  baseURL: "https://api.ourgwala.com",
});

export function handleClearLocalStorage() {
    return ["userData", "loggedIn", "accessToken"].forEach((key) => {
      window.localStorage.removeItem(key);
    });
}

// Add an interceptor to the Axios instance
newGwalaAxios.interceptors.request.use(function (config) {
  // Check if the request is not for the login route
  if (!config.url.includes("/Login")) {
    // Assuming you have the token stored in localStorage or elsewhere
    const token = localStorage.getItem("accessToken"); // Adjust this based on where your token is stored
    if (token) {
      // Add bearer token to the request headers
      config.headers.Authorization = `Bearer ${token.slice(1, -1)}`;
    }
  }
  return config;
});

export default newGwalaAxios;