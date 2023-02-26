<template>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="name" class="form-label"></label>
            <input required type="text" v-model="editable.name" class="form-control" id="name" placeholder="name"
                name="name">
        </div>
        <div class="mb-3">
            <label for="jobTitle" class="form-label">picture</label>
            <input required type="url" v-model="editable.picture" class="form-control" id="picture" placeholder="picture"
                name="picture">
        </div>
        <div class="mb-3">
            <label for="body" class="form-label">body</label>
            <textarea name="body" type="text" v-model="editable.body" class="form-control" id="body" rows="3">
                                        </textarea>
        </div>
        <div>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                {{ editable.id ? 'Save Changes' : 'Create Post' }}
            </button>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue';
import { router } from '../router.js';
import { postsService } from '../services/postsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
export default {
    setup() {
        const editable = ref({})
        return {
            editable,

            async handleSubmit() {
                try {
                    const post = editable.value
                    await postsService.createPost(editable.value)
                    logger.log('are you creating job to service?', error)
                    editable.value = {}
                    if (post?.id) {
                        router.push({ name: 'Profile', params: { creatorId: post.creator.id } })
                    }
                } catch (error) {
                    Pop.error(error, '[Submitting Post]')
                }
            }

        }
    }
}
</script>


<style lang="scss" scoped></style>