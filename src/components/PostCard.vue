<template>
  <div class="card mb-3 mt-3">
    <h5 class="card-title p-3">{{ post.creator.name }}<i class="fs-3 gap-3 mdi mdi-heart"></i></h5>
    <img class="postImg" :src="post.creator.picture" :alt="post.creator.name">
    <div class="card-body">
      <div class="previewTxt pb-2">{{ post.body }}
      </div>
      <router-link :to="{ name: 'Profile', params: { creatorId: post.creator.id } }">
        <div class="d-flex justify-content-end p-3">
          <img class="rounded-circle" height="70" width="70" :src="post.creator.picture" :alt="post.creator.name"
            :title="`View ${post.creator.name}'s Profile!`">
        </div>
      </router-link>
    </div>
  </div>
</template>


<script>
import { Post } from '../models/Post.js';
import { profilesService } from '../services/ProfilesService.js';

export default {
  props: {
    post: {
      type: Post,
    }
  },
  setup(props) {
    return {
      setCurrentProfile() {
        console.log(props);
        profilesService.setCurrentProfile(props.post.creator)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.card {
  width: 40vh;
  border-color: black;
  border-radius: 2%;
  box-shadow: 2px 2px 4px red;
}

;

.postImg {
  height: 30vh;
  object-fit: cover;

}

;

.previewTxt {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
}
</style>