import { createWebHistory, createRouter } from "vue-router";
import HomePage from './pages/HomePage.vue'
import Register from './components/RegisterForm.vue'
import Login from './components/LoginForm.vue'
import UserPage from './pages/UserPage.vue'
import TicketPage from './pages/TicketPage.vue'
import VehiclePage from './pages/VehiclePage.vue'

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/register', component: Register, name: 'Register' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/profile', component: UserPage, name: 'Profile' },
  { path: '/tickets/:id', component: TicketPage, name: 'Ticket' },
  { path: '/vehicle/:type/:id', component: VehiclePage, name: 'Vehicle' },
  

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router