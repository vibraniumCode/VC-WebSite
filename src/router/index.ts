import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
    { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
    { path: '/services', name: 'services', component: () => import('@/views/ServicesView.vue') },
    { path: '/projects', name: 'projects', component: () => import('@/views/ProjectsView.vue') },
    { path: '/blog', name: 'blog', component: () => import('@/views/BlogView.vue') },
    { path: '/blog/:slug', name: 'blog-post', component: () => import('@/views/BlogPostView.vue') },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/NotFoundView.vue') }
  ]
})

export default router