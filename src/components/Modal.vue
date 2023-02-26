<template>
    <div class="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ modalTitle }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div>
                    <slot name="modal-footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState.js';
import { computed } from 'vue';

export default {
    props: {
        modalTitle: { type: String, default: 'Untitled because I forgot' },
    },
    setup() {
        return {
            profile: computed(() => AppState.profile),
            post: computed(() => AppState.posts),
            creator: computed(() => AppState.creator)
        }
    }
}
</script>


<style lang="scss" scoped></style>