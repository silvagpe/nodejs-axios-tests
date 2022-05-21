import axios  from "axios";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = `Bearer ${process.env.TOKEN}`

const axiosInstance = axios.create({
    baseURL : process.env.BASE_URL,
    header:{
        'Content-Type': 'application/json',
        'Authorization': TOKEN 
    }
});

export default axiosInstance