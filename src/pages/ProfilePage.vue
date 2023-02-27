<template>
    <div class="row">
        <div class="col-md-12">
            <img class="coverImg" :src="creator.coverImg" alt="">
        </div>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="col-md-10 mt-5 card rounded">
            <span>
                <div class="col-md-">
                    <img class="ms-2 mb-5 mt-5 rounded-circle" height="80" width="80" :src="post.creator.picture" alt>
                    <div class="fs-2"><b>{{ post.creator.name }}</b>
                        <i class="mdi mdi-heart fs-3">{{ post.creator.likeId }}</i>
                        <span v-if="post.creator.github">
                            <a :href="post.creator.github" target="_blank">
                                <i class="mdi mdi-github"></i>
                            </a>
                        </span>
                        <div class="">{{ post.creator.createdAt }}</div>
                    </div>
                    <div>
                        <div class="p-3">{{ post.creator.class }}
                            <button @click="removePostById" v-if="account.id == creator.id"
                                class="btn w-20 p-2 btn-danger">Remove
                                Post</button>
                        </div>
                    </div>
                </div>
            </span>
            <div class="fs-6"> {{ post.bio }}
                <img class="rounded decor border border-5 opacity-60 coverImg mt-2 p-3" :src="post.imgUrl" alt="">
            </div>
            <div class="fw-bold">Post:</div>
            <p class="ms-3 fs-6 my-3">{{ post.body }}</p>
        </div>
    </div>
    <div v-for=" post in posts" class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-12">
                <Post :post="post" />
            </div>

        </div>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { profilesService } from '../services/ProfilesService.js'
import { postsService } from '../services/PostsService.js'
import { Post } from '../models/Post.js';
import Pop from '../utils/Pop.js';

export default {

    setup() {
        const route = useRoute();
        async function getPostById() {
            try {
                console.log("[CREATOR ID ROUTE]", route.params.creatorId);
                const creatorId = route.params.creatorId;
                await postsService.getPostById(creatorId);
            }
            catch (error) {
                Pop.error(error);
                logger.error(error);
            }
        }
        async function getProfileById() {
            try {
                console.log("[CREATOR ID ROUTE]", route.params.creatorId);
                const creatorId = route.params.creatorId;
                await profilesService.getProfileById(creatorId);
            }
            catch (error) {
                Pop.error(error);
                logger.error(error);
            }
        };
        onMounted(() => {
            getProfileById().then(() => { getPostById() });
        })


        return {
            posts: computed(() => AppState.posts),
            creator: computed(() => AppState.currentProfile),
            account: computed(() => AppState.account)
        }
    },
    async removePostsById(postId) {
        try {
            if (await Pop.confirm('Would you like to remove your Posting? Are you surely sure?')) {
                await postsService.removePostById(postId)
                router.push({ name: 'Jobs' })
            }
        } catch (error) {
            Pop.error(error, '[Removing Job]')
        }
    }
}

</script>


<style lang="scss" scoped>
.coverImg {
    height: 20em;
    width: 100%;
    object-fit: cover;
}

.decor {
    border: 2px 2px 3px blue;
}
</style>