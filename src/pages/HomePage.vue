<template>
    <div class="container">
        <div class="row d-flex justify-content-center card border border-dark mt-5">
            <div class="col-md-12">
                <PostForm />
                <!-- <div v-if="pro in profiles">
                    <ProfileCard :profile="pro" />
                </div> -->
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div v-for="p in posts" class="col-md-7">
                <PostCard :post="p" />
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-evenly">
        <button class="btn btn-secondary me-3 " :disabled="!olderPage" @click="changePage(olderPage)">Prev</button>
        <button class="btn btn-primary ms-3" :disabled="!newerPage" @click="changePage(newerPage)">Next</button>
    </div>
</template>

<script>
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { onMounted, computed } from 'vue';
import { postsService } from '../services/PostsService.js';
import { AppState } from '../AppState.js';
import PostCard from '../components/PostCard.vue';
import { adsService } from '../services/AdsService.js';
import AdCard from '../components/AdCard.vue';
import ProfileCard from '../components/ProfileCard.vue';

export default {
    setup() {
        async function getAllPosts() {
            try {
                await postsService.getAllPosts();
            }
            catch (error) {
                logger.log(error);
                Pop.error(error);
            }
        }
        async function getAllAds() {
            try {
                await adsService.getAllAds();
            }
            catch (error) {
                logger.log(error);
                Pop.error(error);
            }
        }
        onMounted(() => {
            getAllPosts();
            getAllAds();
        });

        return {
            posts: computed(() => AppState.posts),
            newerPage: computed(() => AppState.newerPage),
            olderPage: computed(() => AppState.olderPage),
            ads: computed(() => AppState.ads),
            profiles: computed(() => AppState.profile)
        };
    },
    async changePage(url) {
        try {
            await postsService.changePage(url);
        }
        catch (error) {
            console.error(error);
            Pop.error(('change page?'), error.message);
        }
    },
    components: { PostCard, AdCard, ProfileCard }
}
</script>

<style scoped lang="scss"></style>
