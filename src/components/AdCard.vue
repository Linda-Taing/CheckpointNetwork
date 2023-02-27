<template>
    <div class="col-md-12">
        <h6 class="text-center">{{ ad.title }}</h6>
    </div>
    <div class="container">
        <div class="col-md-12">
            <img class="ads mb-3" :src="ad.tall" :alt="ad.title">
        </div>

    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { Ad } from '../services/Ad.js';
import { onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { adsService } from '../services/AdsService.js';

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
            // ads: computed(() => AppState.ads)
        }
    }
}
</script>


<style lang="scss" scoped>
.ads {
    width: 10em;
}
</style>