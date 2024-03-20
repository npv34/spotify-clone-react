import axios from "../axios/InstanceAxios";
import {API_URL} from "../const/SpotifyConst";

class AuthService {
    static async getUserProfile() {
        return await axios.get(`/me`);
    }
}

export default AuthService;