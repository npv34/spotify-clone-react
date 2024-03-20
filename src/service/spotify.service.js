import axios from "../axios/InstanceAxios";
import {API_URL} from "../const/SpotifyConst";

class SpotifyService {
    static async  getTopArtist(limit) {
         return await SpotifyService.search("artist", "artist", limit)
     }

    static async search(key, type, limit) {
        console.log(`/search?q=${key}&type=${type}&limit=${limit}`);
         return await axios.get(`/search?q=${key}&type=${type}&limit=${limit}`)
     }
}

export default SpotifyService;