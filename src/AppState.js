import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Post.js').Post[]} */
  posts: [],

  currentProfile: {},
  /** @type {import('./models/Post.js').Post|null} */
  post: null,
  /** @type {import('./models/Account.js').Account} */


  newerPage: null,
  olderPage: null,

  /** @type {import('./models/Ad.js').Ad[]} */
  ads: [],
  /** @type {import('./models/Ad.js').Ad|null} */
  ad: null
})

