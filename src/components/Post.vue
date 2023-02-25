<template>
    <div class="row">
        <div class="col-md-6 mt-5 d-flex justify-content-center card rounded">
            <img class="ms-2 mb-5 mt-5 rounded-circle" height="100" width="100" :src="post.creator.picture" alt>
            <div class="fs-2"><b>{{ post.creator.name }}</b></div>
            <div class="p-3">{{ post.creator.createdAt }}</div>
            <div class="p-3">{{ post.class }}</div>
            <img class="rounded decor border border-5 opacity-60 coverImg mt-2 p-3" :src="post.imgUrl" alt="">
            <div class="fs-2"> {{ post.bio }}</div>
            <span v-if="post.creator.github">
                <a :href="post.creator.github" target="_blank">
                    <i class="mdi mdi-github"></i>
                </a>
            </span>
            <div>{{ post.creator.likes }}</div>
            <div class="fs-3 my-3">{{ post.body }}</div>
        </div>
    </div>
</template>


<script>
import { Post } from '../models/Post.js';


export default {
    props: {
        post: {
            type: Post, required: true
        }
    },

    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
.decor {
    height: 20em;
    width: 100%;
    object-fit: cover;

}
</style>