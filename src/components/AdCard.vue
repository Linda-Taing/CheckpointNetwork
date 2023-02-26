<template>
    <div class="container">
        <div class="row d-flex">
            <div class="col-md-2 ">
                <h6 class="text-center">{{ ad.title }}</h6>
                <img class="ads mb-3" :src="ad.tall" :alt="ad.title">
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { Ad } from '../services/Ad.js';

export default {
    props: {
        ad: { type: Ad, }
    },
    setup() {
        return {
        }
    }
}
</script>


<style lang="scss" scoped>
.ads {
    width: 10em;
}
</style>