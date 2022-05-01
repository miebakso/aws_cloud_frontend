import { createRouter, createWebHistory } from 'vue-router'
import PostView from '../views/PostView.vue'
import DetailPostView from '../views/DetailPostView.vue'
import LoginView from '../views/LoginView.vue'
import NotFound from '../views/NotFound.vue'
import PopularView from '../views/PopularView.vue'
import SearchView from '../views/SearchView.vue'
import RegisterView from '../views/RegisterView.vue'
import UserPostsView from '../views/UserPostsView.vue'
import EditPostView from '../views/EditPostView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import AdminView from '../views/AdminView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/post/edit',
      name: 'edit',
      component: EditPostView
    },
    {
      path: '/post/create',
      name: 'create',
      component: CreatePostView
    },
    {
      path: '/post',
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
      component: PopularView
    },
    {
      path: '/user/posts',
      name: 'userpost',
      component: UserPostsView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFound
    }
   
  ]
})

export default router

