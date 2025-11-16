import axios from "axios";

const baseURL = "https://mealplanner-qjel.onrender.com";

const protectedInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: { "Content-Type": "application/json" },
    withCrediantials: true,
});

//protectedInstance.interceptors.request.use
//((config) => {
  //  const token = localStorage.getItem
    //("token");
    //if (token) {
      //  config.headers["Authorization"] = 
        //`Bearer ${token}`;
    //}
    //return config;
//})

export default protectedInstance;