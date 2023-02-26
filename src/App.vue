<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>

  <footer class="bg-dark text-light sticky-bottom">
    <div class="container">
      <div class="row">
        <div v-for="ad in ads" class="col-md-10">
          <AdCard :ad="ad" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import AdCard from './components/AdCard.vue'

export default {
  setup() {

    return {
      appState: computed(() => AppState),
      ads: computed(() => AppState.ads)
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
  place-content: center;
  min-height: 100vh;
  width: 15em;

}
</style>
