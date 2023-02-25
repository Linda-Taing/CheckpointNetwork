<template></template>


<script>
import { onMounted } from 'vue';
import { adsService } from '../services/AdsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {


    setup() {
        async function getAllAds() {
            try {
                await adsService.getAllAds();
            }
            catch (error) {
                logger.log(error);
                Pop.error(error);
            }
        }
        onMounted(() => {
            getAllAds();
        })
        return {

        }
    }
}
</script>


<style lang="scss" scoped></style>