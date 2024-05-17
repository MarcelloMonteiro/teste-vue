import { createRouter, createWebHistory } from 'vue-router';
import TaskListPage from '../components/TaskListPage.vue';
import TaskFormPage from '../components/TaskFormPage.vue';
import LoginPage from '../components/LoginPage.vue';
import { auth } from '@/firebase';

const routes = [
    { path: '/', component: TaskListPage, name: 'tasks.index' },
    { path: '/create', component: TaskFormPage, name: 'tasks.create' },
    { path: '/edit/:id', component: TaskFormPage, name: 'tasks.edit' },
    { path: '/login', component: LoginPage, name: 'login' }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const isAuthenticated = auth.currentUser;
  
    if (requiresAuth && !isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  });
export default router;
