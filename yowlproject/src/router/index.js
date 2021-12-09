import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Comment from '../views/Comment.vue'
import Post from '../views/Post.vue'
import Main from '../views/Main.vue'
import Souscomment from '../views/Souscomment.vue'
import Login from '../vue/Login.vue'
import Register from '../vue/Register.vue'
import USER_GETcomments from '../vue/USER_GETcomments.vue'
import USER_GETinfos from '../vue/USER_GETinfos.vue'
import USER_GETposts from '../vue/USER_GETposts.vue'
import USER_UPDATEcomments from '../vue/USER_UPDATEcomments.vue'
import USER_UPDATEinfos from '../vue/USER_UPDATEinfos.vue'
import USER_UPDATEposts from '../vue/USER_UPDATEposts.vue'


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
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/USER_GETcomments',
    name: 'USER_GETcomments',
    component: USER_GETcomments
  },

  {
    path: '/USER_GETinfos',
    name: 'USER_GETinfos',
    component: USER_GETinfos
  },

  {
    path: '/USER_UPDATEinfos',
    name: 'USER_UPDATEinfos',
    component: USER_UPDATESinfos
  },

  {
    path: '/USER_GETposts',
    name: 'USER_GETposts',
    component: USER_GETposts
  },

  {
    path: '/USER_UPDATEcomments',
    name: 'USER_UPDATEcomments',
    component: USER_UPDATEcomments
  },

  {
    path: '/USER_UPDATEinfos',
    name: 'USER_UPDATEinfos',
    component: USER_UPDATEinfos
  },

  {
    path: '/USER_UPDATEposts',
    name: 'USER_UPDATEposts',
    component: USER_UPDATEposts
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
