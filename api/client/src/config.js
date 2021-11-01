import axios from "axios";
export const axiosInstance =axios.create({
    baseURL: "https://publication-site.herokuapp.com/api/"
})