import axios from "axios"

const gwalaAxios = axios.create({
    baseURL: "https://ourgwala-api-w37c8.ondigitalocean.app"
})

export const newGwalaAxios = axios.create({
  baseURL: "https://api.ourgwala.com",
});

export default gwalaAxios