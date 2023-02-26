<template>
    <div class="row d-flex justify-content-center">
        <div class="col-md-10 mt-5 d-flex justify-content-center card rounded">
            <span>
                <img class="ms-2 mb-5 mt-5 rounded-circle" height="80" width="80" :src="post.creator.picture" alt>
                <div class="fs-2"><b>{{ post.creator.name }}</b>
                    <i class="mdi mdi-heart fs-3">{{ post.creator.likeId }}</i>
                </div>
                <div class="p-3">{{ post.creator.createdAt }}</div>
                <div class="p-3">{{ post.creator.class }}
                    <span v-if="post.creator.github">
                        <a :href="post.creator.github" target="_blank">
                            <i class="mdi mdi-github"></i>
                        </a>
                    </span>
                </div>
            </span>
            <img class="rounded decor border border-5 opacity-60 coverImg mt-2 p-3" :src="post.imgUrl" alt="">
            <div class="fs-2"> {{ post.bio }}
            </div>
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