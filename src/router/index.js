import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from "../views/CharactersView.vue"
import CharacterInfo from "../components/CharacterInfo/index.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/characters',
    // path: '/characters/:character',
    name: 'characters',
    component: CharactersView
  },
  {
    path: '/characters/:character',
    // path: '/characters/:character',
    name: 'characterInfo',
    component: CharacterInfo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
