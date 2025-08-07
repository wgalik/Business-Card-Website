import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../components/HomePage.vue'
import AboutMe from '../components/AboutMe.vue'
import Techs from '../components/TechsPage.vue'
import Projects from '../components/ProjectsPage.vue'
import Contact from '../components/ContactPage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'AboutMe', component: AboutMe },
  { path: '/techs', name: 'Techs', component: Techs },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory('/Business-Card-Website/'),
  routes,
})

export default router
