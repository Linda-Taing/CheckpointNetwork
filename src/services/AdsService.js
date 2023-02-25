import { logger } from "../utils/Logger.js";

class AdsService {
    async getAllAds() {
        const res = await get('api.ads');
        logger.log('Getting All Ads', res.data)
    }
}
export const adsService = new AdsService()