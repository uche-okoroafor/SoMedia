import { createRouter, createWebHistory } from 'vue-router'
import  PageNotFound from '../views/PageNotFound.vue'
import  Home from '../views/Home.vue'
import  Timeline from '../views/Timeline.vue'
import UserProfile from '../views/UserProfile.vue'


const routes = [
{
    path: '/login',
    name: 'Login',
  component: () => import(/* webpackChunkName: "LogIn" */ '../views/LogInPage.vue')
  },

 {
    path: '/',
    name: 'Login',
  component: () => import(/* webpackChunkName: "Login" */ '../views/LogInPage.vue')

  },

 



 {
    path: '/Home',
    name: 'Home',
  component:Home
  },



 {
    path: '/Newsfeed',
    name: 'Newsfeed',
  component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')

  },
  {
    path: '/:userName/Timeline',
    name: 'Timeline',
  component:Timeline,
   props:true
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
  component: () => import(/* webpackChunkName: "Messages" */ '../views/Messages.vue'),
props:true
  },

 {
    path: '/:userName/friends',
    name: 'Friends',
  component: () => import(/* webpackChunkName: "Friends" */ '../views/Friends.vue'),

props:true
  },

 {
      path:'/:catchAll(.*)',
      name: PageNotFound,
      component: PageNotFound
    },

]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
