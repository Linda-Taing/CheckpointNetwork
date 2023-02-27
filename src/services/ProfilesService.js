import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";


class ProfilesService {
    async getProfileById(profileId) {
        const res = await api.get(`api/profiles/${profileId}`)
        logger.log('Get Current Profile', res.data)
        AppState.currentProfile = res.data

    }
    setCurrentProfile(profile) {
        AppState.currentProfile = profile
    }

    async searchProfiles(searchData) {
        const res = await api.get('api/profiles?query=', { params: searchData })
        logger.log('searching api', res.data)
        AppState.profiles = res.data.results.map(p => new Profile(p))
        // Note: need to get pagination before search queries
        // AppState.currentPage = res.data.page
        // AppState.totalPages = res.data.total_pages
    }

}

export const profilesService = new ProfilesService()