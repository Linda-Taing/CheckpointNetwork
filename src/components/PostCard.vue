<template>
  <div class="container">
    <div class="card postCard mb-3 mt-3">
      <div class="row ">
        <div class="col-md-12">
          <h5 class="card-title p-3">{{ post.creator.name }} </h5>
          <router-link :to="{ name: 'Profile', params: { creatorId: post.creator.id } }">
            <div class="d-flex justify-content-start ms-3">
              <img class="rounded-circle" height="70" width="70" :src="post.creator.picture" :alt="creator.name"
                :title="`View ${post.creator.name}'s Profile!`">
            </div>
          </router-link>
          <div class="col-md-12">
            <i @click="addLike" class="selectable fs-5 ms-3 me-3 mdi mdi-heart">Like
              Count: {{ post.likes.length }}</i> {{ post.createdAt }}
            <div class="ms-3 previewTxt pb-2 fw-bold">Post:</div>
            <div class="ms-5 pb-2">{{ post.body }}</div>

            <img class="img-fluid" :src="post.imgUrl" :alt="creator.coverImg">


            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Post } from '../models/Post.js';
import { profilesService } from '../services/ProfilesService.js';
import { computed } from 'vue';
import { AppState } from '../AppState.js';
export default {
  props: {
    post: {
      type: Post, required: true,
      default: () => ({ likes: [], likeId: [] })
    }
  },
  //Because likes came back undefined using a mounted hook, so it can be initialized to be used for like click. set method is to give object initial value. ---it doesn't work...
  mounted() {
    if (!this.post.likes) {
      this.$set(this.post, 'likes', []);
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      creator: computed(() => AppState.currentProfile),
      addLike() {
        this.post.likes.push({})
      },
      setCurrentProfile() {
        console.log(props);
        profilesService.setCurrentProfile(props.post.creator)
      }
    }
  },

}


</script>


<style lang="scss" scoped>
.card {
  width: 30em;
  border-color: black;
  border-radius: 2%;
  box-shadow: 2px 2px 4px rgb(43, 37, 37);
}

;

.postImg {
  height: 20vh;
  object-fit: cover;

}

;

.previewTxt {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}

.postCard {
  height: 30em;
  overflow: hidden;
}
</style>