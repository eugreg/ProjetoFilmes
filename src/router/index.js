import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActorsView from '../views/ActorsView.vue'
import MovieView from '../views/MovieView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/actors',
      name: 'Actors',
      component: ActorsView
    },
    {
      path: '/movie',
      name: 'Movie',
      component: MovieView
    },
  ]
})

export default router
