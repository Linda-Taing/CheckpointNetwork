import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { sandboxApi } from "./AxiosService.js";
class PostsService {

    async getAllPosts() {
        const res = await api.get('api/posts/')
        logger.log('GET ALL POSTS', res.data)
        AppState.posts = res.data.posts.map(p => new Post(p))
        logger.log(AppState.posts)
        AppState.newerPage = res.data.newer
        AppState.olderPage = res.data.older
    }
    async getPostById(creatorId) {
        const res = await api.get(`api/profiles/${creatorId}/posts`)
        logger.log('GET IDs', res.data)
        AppState.posts = res.data.posts.map(p => new Post(p))
        logger.log(AppState.posts)
    }
    async createPost(creatorId) {
        const res = await api.post(`api/posts`, creatorId)
        console.log('did you get to the api?')
        AppState.posts.push(res.data)
        console.log('are you in the AppState?')

    }

    async changePage(url) {

        const res = await api.get(url)
        logger.log('change page?', res.data)
        AppState.newerPage = res.data.newer
        AppState.olderPage = res.data.older
        AppState.posts = res.data.posts


    }
    async removePostById(postId) {
        const res = await api.delete('api/posts/' + postId)
        let i = AppState.posts.findIndex(p => p.id == postId)
        if (i != -1) {
            AppState.posts.splice(i, 1)
        }
    }
    clearPosts() {
        AppState.posts = []
    }
}
export const postsService = new PostsService()