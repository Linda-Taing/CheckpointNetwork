<template>
    <div class="row">
        <div class="col-md-12">
            <img class="coverImg" :src="creator.coverImg" alt="">
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="d-flex justify-content-start p-3">
                    <img class="rounded-circle" height="100" width="100" :src="creator.picture" :alt="creator.name">
                    <p>{{ creator.name }}</p>
                    <p>{{ creator.bio }}</p>
                    <a :href="creator.github" target="_blank">
                        <i class="mdi mdi-github"></i>
                    </a>
                    <p>{{ creator.class }}</p>
                    <span :class="`${creator.graduated ? 'cool-font' : 'ugly-font'}`">
                        {{ creator.name }}
                    </span>

                </div>
            </div>
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
    props: {
        post: {
            type: Post,
            default: () => ({ likes: [] })
        }
    },

    setup(props) {
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
        // help with this because the page wasn't loading correctly
        onMounted(() => {
            getProfileById().then(() => { getPostById() });
        })
        return {
            posts: computed(() => AppState.posts),
            creator: computed(() => AppState.currentProfile),
            account: computed(() => AppState.account),
        }
    },

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

.cool-font {
    font-family: 'Satisfy', cursive;

    font-size: 3em;
}

.ugly-font {
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 3em;
}
</style>