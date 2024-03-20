import axios from "axios";
import { API_URL } from "../const/SpotifyConst";

// const token = localStorage.getItem("token");

// if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
// } else {
//     delete axios.defaults.headers.common['Authorization'];
// }

// Default config options
const defaultOptions = {
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });

export default instance;