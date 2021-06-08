import { createRouter, createWebHistory } from 'vue-router'
import movie from './movie'
import cinema from './cinema'
import mine from './mine'

const routes = [
  movie,
  cinema,
  mine,
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/:notFind',
    redirect: '/movie'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
