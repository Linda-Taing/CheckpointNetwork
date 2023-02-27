<template>
    <div class="row">
        <div class="col-md-12">
            <img class="coverImg" :src="creator.coverImg" alt="">
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
                router.push({ name: 'Profile' })
            }
        } catch (error) {
            Pop.error(error, '[Removing Post]')
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