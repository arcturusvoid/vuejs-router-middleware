import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'

import axios from 'axios';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            needsAuth: false,
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            needsAuth: true,
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    if (to.meta.needsAuth) {
      try {
        const response = await axios.get('/api/user');
        const user = response.data;
        if (user) {
          console.log('User is logged in.');
          next();
        } else {
          console.log('User is not logged in.');
          next('/login');
        }
      } catch (error) {
        console.error('Error while checking authentication status:', error);
        next('/error');
      }
    } else {
      console.log("I don't need authentication");
      next();
    }
  });

export default router;
