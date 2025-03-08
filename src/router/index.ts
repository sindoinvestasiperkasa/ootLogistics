import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/home/HomeView.vue';
import AboutView from '@/views/about/AboutView.vue';
import ServicesView from '@/views/services/ServicesView.vue';
import ContactView from '@/views/contact/ContactView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/services',
    name: 'Servicas',
    component: ServicesView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
