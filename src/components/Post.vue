<template>
    <div class="row d-flex justify-content-center">
        <div class="col-md-10 mt-5 card rounded">
            <div class="col-md-10">
                <img class="ms-2 mb-5 mt-5 rounded-circle" height="80" width="80" :src="post.creator.picture" alt>
                <div class="fs-2"><b>{{ post.creator.name }}</b>
                    <i class="mdi mdi-heart fs-3">{{ post.likes.length }}</i>
                    <span v-if="post.creator.github">
                        <a :href="post.creator.github" target="_blank">
                            <i class="mdi mdi-github"></i>
                        </a>
                    </span>
                </div>
                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="p-3">{{ post.creator.class }}
                                    <button @click="removePostById(postId)" v-if="account.id == creator.id"
                                        class="btn w-20 p-2 btn-danger">Remove
                                        Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fs-6"> {{ post.bio }}
                <img class="rounded decor border border-5 opacity-60 coverImg mt-2 p-3" :src="post.creator.coverImg"
                    :alt="post.creator.name">
            </div>
            <div class="mb-2">{{ post.createdAt }}</div>
            <div class="fw-bold">Posting:</div>
            <p class="ms-3 fs-6 my-3 card-body pretty ">{{ post.body }}</p>
        </div>
    </div>
</template>


<script>
import { Post } from '../models/Post.js';
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { postsService } from '../services/postsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';


export default {
    props: {
        post: {
            type: Post,
            default: () => ({ likes: [] })

        }
    },

    setup() {

        return {
            posts: computed(() => AppState.posts),
            creator: computed(() => AppState.currentProfile),
            account: computed(() => AppState.account)
        }
    },
    addLike() {
        this.post.likes.push({})
    },
    async removePostById(postId) {
        try {
            if (await Pop.confirm('Would you like to remove your Posting? Are you surely sure?')) {
                await postsService.removePostById(postId)
                router.push({ name: 'Post' })
            }
        } catch (error) {
            Pop.error(error, '[Removing Post]')
            logger.log('Are you deleted?')
        }
    }
}
</script>


<style lang="scss" scoped>
.decor {
    height: 20em;
    width: 100%;
    object-fit: cover;

}

.pretty {
    font-family: 'Tilt Neon', cursive;
}
</style>