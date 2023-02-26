import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
class PostsService {

    async getAllPosts() {
        const res = await api.get('api/posts/')
        logger.log('GET ALL POSTS', res.data)
        AppState.posts = res.data.posts.map(p => new Post(p))
        logger.log(AppState.posts)
        AppState.nextPage = res.data.next
        AppState.previousPage = res.data.previous
    }

    async getPostById(creatorId) {
        const res = await api.get(`api/profiles/${creatorId}/posts`)
        logger.log('GET IDs', res.data)
        AppState.posts = res.data.posts.map(p => new Post(p))
        logger.log(AppState.posts)
    }
    async createPost(creatorId) {
        const res = await api.post(`api/posts`, creatorId)
        AppState.posts.push(res.data)
        return res.data
    }

    async changePage() {
        const res = await api.get()
        logger.log('change page?', res.data)
        AppState.nextPage = res.data.next
        AppState.previousPage = res.data.previous
        AppState.posts = res.data.posts


    }
    clearPosts() {
        AppState.posts = []
    }
}
export const postsService = new PostsService()