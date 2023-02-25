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
    }
}
export const postsService = new PostsService()