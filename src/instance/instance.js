import axios from "axios";

const baseURL = "https://mealplanner-qjel.onrender.com";

const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: { "Content-Type": "application/json" },
});

export default instance;