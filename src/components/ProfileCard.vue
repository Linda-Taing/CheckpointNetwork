<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <p>
                    {{ post, creator.name }}
                </p>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { Profile } from '../models/Account.js';
import { Post } from '../models/Post.js';
export default {
    prop: {
        profile: {
            type: Profile,
        }
    },


    setup() {
        return {
            post: computed(() => AppState.posts)
        }
    }
}
</script>


<style lang="scss" scoped></style>