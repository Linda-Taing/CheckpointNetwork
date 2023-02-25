<template>

  <div class="container">
    <div class="row">
      <div v-for="p in posts" class="col-md-3 ">
     <PostCard :post="p"/>
      </div>
    </div>
  </div>

  
</template>

<script>
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { onMounted, computed } from 'vue';
import {postsService}  from '../services/PostsService.js';
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
            posts: computed(() => AppState.posts)
        };
    },
    components: { PostCard }
}
</script>

<style scoped lang="scss">


</style>
