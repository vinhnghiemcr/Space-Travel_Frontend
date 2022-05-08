import { createWebHistory, createRouter } from "vue-router";
import HomePage from './components/HomePage.vue'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
//   { path: '/listings', component: ListingsPage, name: 'ListingsPage' },
//   { path: '/listings/:listing_id', component: ListingView, name: 'ListingView' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router