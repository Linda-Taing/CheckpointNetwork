import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";
import { Ad } from "./Ad.js";

class AdsService {

    async getAllAds() {
        const res = await api.get('api/ads?/count=3');
        logger.log('Getting All Ads', res.data)
        AppState.ads = res.data.map(a => new Ad(a))
        logger.log(AppState.ads)
    }
}
export const adsService = new AdsService()