



  import { createRouter, createWebHistory } from 'vue-router'
  import Comment from '@/views/Comment.vue'
  import Post from '@/views/Post.vue'
  import Main from '@/views/Main.vue'
  import Souscomment from '@/views/Souscomment.vue'
  
  
  
  // import Home from '@/views/Home.vue';
  // import Create from '@/views/Create.vue';
  import Login from '@/views/Login.vue';
  import Register from '@/views/Register.vue';
  import Connexion from '@/views/Connexion.vue';
  // import Dashboard from '@/views/Dashboard.vue';


import postimageVue from '../views/postimage.vue'
import EditbackVue from '../views/Editback.vue'
  
  const routes = [
  // {
  //     name: 'Create',
  //     path: '/create',
  //     component: Create,
  // },


  {
    path: '/Editback',
    name: 'Editback',
    component: EditbackVue,
  },
  {
    path: '/postimage',
    name: 'Postimage',
    component: postimageVue,
  },
  {
      name: 'Login',
      path: '/login',
      component: Login,
  },
  {
      name: 'Register',
      path: '/register',
      component: Register,
  },
  {
      name: 'Connexion',
      path: '/connexion',
      component: Connexion,
  },
  // {
  //     name: 'Dashboard',
  //     path: '/dashboard',
  //     component: Dashboard,
  // },
  
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
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