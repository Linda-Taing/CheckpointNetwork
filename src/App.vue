<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>

  <footer class="bg-dark text-light sticky-bottom">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div v-for="ad in ads" class="col-md-10">
          <AdCard :ad="ad" />
        </div>
        <!-- Note need pagination first -->
        <!-- <form @submit.prevent="searchProfiles()">
            <div class="input-group mb-3 me-3">
              <input v-model="editable.query" required type="text" class="form-control" placeholder="Search profiles"
                aria-label="Search profiles" aria-describedby="button-addon2">
              <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
                <i class="mdi mdi-magnify"></i>
              </button>
            </div>
          </form> -->
      </div>
    </div>

  </footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import AdCard from './components/AdCard.vue'
import { profilesService } from './services/ProfilesService.js'
import { logger } from './utils/Logger.js'
import Pop from './utils/Pop.js'
import { Ad } from './services/Ad.js'

export default {
  props: {
    ad: { type: Ad, }
  },

  setup() {

    return {
      appState: computed(() => AppState),
      ads: computed(() => AppState.ads)
    }
  },
  async searchProfiles() {
    try {
      let searchData = editable.value
      await profilesService.searchProfiles(searchData)
      editable.value = {}
    } catch (error) {
      logger.error(error)
      Pop.error(error.message)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: top;
  min-height: 100vh;
  width: 20em;

}
</style>
