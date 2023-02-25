<template>
    

 <div v-for="p in posts" class="container">
    <div class="row">
        <div class="col-md-12">
            <img class="coverImg" :src="p.creator.coverImg" alt="">
        </div>
    </div>
    <div class="row">
      <div class="col-md- mt-5 d-flex justify-content-center card rounded">
          <img class="ms-2 mb-5 mt-5 rounded-circle" height="100" width="100" :src="p.creator.picture" alt>
          <div class="fs-2"><b>{{ p.creator.name }}</b></div>
            <div class="p-3">{{ p.creator.createdAt }}</div>
                <div class="p-3">{{ p.class }}</div>
                    <img class="rounded decor border border-5 opacity-60 coverImg mt-2 p-3" :src="p.imgUrl" alt="">
                 <div class="fs-2"> {{ p.bio }}</div>
                    <span v-if="p.creator.github">
                        <a :href="p.creator.github" target="_blank">
                        <i class="mdi mdi-github"></i>
                        </a>
                     </span>
                <div>{{ p.creator.likes }}</div>
            <div class="fs-3 my-3">{{ p.body }}</div>
       </div>
    </div>
 </div>   
</template>


<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { profilesService} from '../services/ProfilesService.js'
import { Post } from '../models/Post.js';

export default {
    props:{
        post:{
            type:Post,
          
        }
    },
    setup(){
        const route = useRoute();
        async function getPostById() {
            try {
                console.log("[CREATOR ID ROUTE]", route.params.creatorId);
                const creatorId = route.params.creatorId;
                await profilesService.getPostById(creatorId);
            }
            catch (error) {
                Pop.error(error);
                logger.error(error);
            }
        };
        onMounted(()=>{
            getPostById()
        })


        return {
            posts: computed(() => AppState.posts),

        }
    }
}
</script>


<style lang="scss" scoped>
.coverImg{
  height: 20em;
  width:  100%;
  object-fit: cover;
}
.decor{
    border: 2px 2px 3px blue;
}

</style>