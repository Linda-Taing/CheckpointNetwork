<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
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
        async function getAllAds() {
            try {
                await adsService.getAllAds();
            }
            catch (error) {
                logger.log(error);
                Pop.error(error);
            }
        } onMounted(() => {
            getAllAds();
        });
        return {
            ads: computed(() => AppState.ads)
        }
    }
}
</script>


<style lang="scss" scoped>
.ads {
    width: 10em;
}
</style>