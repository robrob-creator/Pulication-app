import axios from "axios";
export const axiosInstance =axios.create({
    baseURL: "https://publication-app.herokuapp.com/api/"
})