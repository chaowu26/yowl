import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Comment from '../views/Comment.vue'
import Post from '../views/Post.vue'
import Main from '../views/Main.vue'
import Souscomment from '../views/Souscomment.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/comment',
    name: 'comment',
    component: Comment
  },

   {
    path: '/souscomment',
    name: 'souscomment',
    component: Souscomment
  },


    {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/post',
    name: 'post',
    component: Post
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
