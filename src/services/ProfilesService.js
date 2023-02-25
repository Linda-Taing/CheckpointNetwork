import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";


class ProfilesService {
    //  move to postsservice later
    // async getPostById(creatorId) {
    //     const res = await api.get(`api/profiles/${creatorId}/posts`)
    //     logger.log('GET IDs', res.data.posts)
    //     AppState.posts = res.data.posts

    // }
    async getProfileById(profileId) {
        const res = await api.get(`api/profiles/${profileId}`)
        logger.log('Get Current Profile', res.data)
        AppState.currentProfile = res.data

    }
    setCurrentProfile(profile) {
        AppState.currentProfile = profile
    }

}

export const profilesService = new ProfilesService()