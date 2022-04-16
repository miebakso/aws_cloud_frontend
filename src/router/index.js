import { createRouter, createWebHistory } from 'vue-router'
import PostView from '../views/PostView.vue'
import DetailPostView from '../views/DetailPostView.vue'
import LoginView from '../views/LoginView.vue'
import NotFound from '../views/NotFound.vue'
import Popular from '../views/PopularView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/post/:id',
      name: 'post',
      component: DetailPostView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostView
    },
    {
      path: '/popular',
      name: 'popular',
      component: Popular
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFound
    }
  ]
})

export default router

