import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import  PageNotFound from '../views/PageNotFound.vue'
import UserProfile from '../views/UserProfile.vue'
import Timeline from '../views/Timeline.vue'
import LogInPage from '../views/LogInPage.vue'
import Messages from '../views/Messages.vue'
import Friends from '../views/Friends.vue'

const routes = [

 {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
 
 {
      path: '/:catchAll(.*)',
      name: PageNotFound,
      component: PageNotFound
    },

  {
    path: '/:userName/:Timeline',
    name: 'Timeline',
    component:Timeline,
      props:true
  },
 {
    path: '/login',
    name: 'Login',
    component:LogInPage,

  },
 {
    path: '/Home/:userName',
    name: 'userProfile',
    component:UserProfile,
props:true
  },
 {
    path: '/:userName/messages',
    name: 'Messages',
    component:Messages,
props:true
  },

 {
    path: '/:userName/friends',
    name: 'Friends',
    component:Friends,
props:true
  },

]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
