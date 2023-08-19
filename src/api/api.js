import axios from "axios";
export const api = axios.create({
    baseURL: "http://13.229.249.230:8080/"
}
)