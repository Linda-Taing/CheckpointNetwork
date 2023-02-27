<template>
  <div class="container">
    <div class="card mb-3 mt-3">
      <h5 class="card-title p-3">{{ post.creator.name }}<i @click="addLike"
          class="selectable fs-3 gap-3 mdi mdi-heart">Like
          here!</i>
        <p>{{ post.likes.length }}</p>
      </h5>
      <router-link :to="{ name: 'Profile', params: { creatorId: post.creator.id } }">
        <div class="d-flex justify-content-end p-3">
          <img class="rounded-circle" height="70" width="70" :src="post.creator.picture" :alt="creator.name"
            :title="`View ${post.creator.name}'s Profile!`">
        </div>
      </router-link>
      <Modal id="test-modal" modal-title="Create a Post">
        <PostForm />
      </Modal>
      <img class="postImg" :src="post.creator.coverImg" :alt="creator.name">
      <div class="card-body">
        <div class="previewTxt pb-2">{{ post.body }}
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
      type: Post,
      default: () => ({ likes: [] })
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
</style>