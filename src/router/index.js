import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '#/HomePage.vue'
import AboutView from '#/CoffeePage.vue'

const router = createRouter( {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/', component: HomeView
  },
    {
      path: '/about', component: AboutView
    },
  ],
})

export default router