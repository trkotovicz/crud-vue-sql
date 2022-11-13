import { createRouter, createWebHistory } from "vue-router";
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Clients from '../pages/Clients.vue';


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;