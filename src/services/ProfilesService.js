import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";


class ProfilesService {

    async getPostById(creatorId) {
        const res = await api.get(`api/profiles/${creatorId}/posts`)
        logger.log('GET IDs', res.data.posts)
        AppState.posts = res.data.posts

    }
}
export const profilesService = new ProfilesService()