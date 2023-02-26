<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div v-for="p in posts" class="col-md-7">
                <PostCard :post="p" />
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-evenly">
        <button class="btn btn-secondary me-3 " :disabled="!previousPage" @click="changePage(previousPage)">Prev</button>
        <button class="btn btn-primary ms-3" :disabled="!nextPage" @click="changePage(nextPage)">Next</button>
    </div>
</template>

<script>
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { onMounted, computed } from 'vue';
import { postsService } from '../services/PostsService.js';
import { AppState } from '../AppState.js';
import PostCard from '../components/PostCard.vue';

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
        onMounted(() => {
            getAllPosts();
        });
        return {
            posts: computed(() => AppState.posts),
            nextPage: computed(() => AppState.nextPage),
            previousPage: computed(() => AppState.previousPage),
        };

    },
    async changePage() {
        try {
            await postsService.changePage();
        }
        catch (error) {
            console.error(error);
            Pop.error(('change page?'), error.message);
        }
    },
    components: { PostCard }
}
</script>

<style scoped lang="scss"></style>
