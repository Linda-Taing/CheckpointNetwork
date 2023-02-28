import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { Profile } from "../models/Account.js";


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
        // FIXME searchData needs to be an object, it should look like this: {query: 'jerms'}
        logger.log(searchData)
        const res = await api.get('api/profiles', { params: searchData })
        logger.log('searching api', res.data)
        AppState.profiles = res.data.results.map(p => new Profile(p))
    }



}

export const profilesService = new ProfilesService()