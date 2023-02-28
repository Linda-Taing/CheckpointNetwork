<template>
    <div class="container">
        <div class="row ">
            <div class="col-md-12 ">
                <form @submit.prevent="handleSubmit">

                    <div class="mb-3">
                        <label for="picture" class="form-label"></label>
                        <input required type="url" v-model="editable.picture" class="form-control" id="picture"
                            placeholder="Your pics please!" name="picture">
                    </div>
                    <div class="mb-3">
                        <label for="imgUrl" class="form-label"></label>
                        <input required type="url" v-model="editable.imgUrl" class="form-control" id="imgUrl"
                            placeholder="Your Post Picture Here..." name="imgUrl">
                    </div>
                    <div class="mb-3">
                        <label for="body" class="form-label"></label>
                        <textarea name="body" type="text" v-model="editable.body" class="form-control" id="body" rows="3"
                            placeholder="Spill the tea...">
                                                                                                                                            </textarea>
                    </div>
                    <div class="d-flex justify-content-center pb-2">
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                            {{ editable.id ? 'Save Changes' : 'Create Post' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { AppState } from '../AppState.js';
import { router } from '../router.js';
import { postsService } from '../services/postsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { Post } from '../models/Post.js';
export default {
    props: {
        post: {
            type: Post,
        }
    },

    setup() {
        const editable = ref({})
        return {
            editable,
            posts: computed(() => AppState.posts),

            async handleSubmit() {
                try {
                    const form = editable.value
                    await postsService.createPost(editable.value)
                    logger.log('are you creating Post to service?')
                    editable.value = {}
                    // if (post?.id) {
                    //     router.push({ name: 'Profile', params: { creatorId: post.creator.id } })
                    // }
                } catch (error) {
                    Pop.error(error, '[Submitting Post]')
                }
            }

        }
    }
}
</script>


<style lang="scss" scoped></style>