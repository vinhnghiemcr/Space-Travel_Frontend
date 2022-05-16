import { createWebHistory, createRouter } from "vue-router";
import BookingPage from './pages/HomePage.vue'
import ExplorePage from './pages/ExplorePage.vue'
import Register from './components/RegisterForm.vue'
import Login from './components/LoginForm.vue'
import UserPage from './pages/UserPage.vue'
import VehiclePage from './pages/VehiclePage.vue'
import DestinationPage from './pages/DestinationPage.vue'
import DisplayTicketPage from './pages/DisplayTicketPage.vue'
import LandingPage from './pages/LandingPage.vue'

const routes = [
  { path: '/', component: LandingPage, name: 'LandingPage' },
  { path: '/explore', component: ExplorePage, name: 'Explore' },
  { path: '/booking', component: BookingPage, name: 'Booking' },
  { path: '/register', component: Register, name: 'Register' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/profile', component: UserPage, name: 'Profile' },
  { path: '/ticket/:id', component: DisplayTicketPage, name: 'DisplayTicket' },
  { path: '/vehicle/:type/:id', component: VehiclePage, name: 'Vehicle' },
  { path: '/destination/:type/:id', component: DestinationPage, name: 'Destination' },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router