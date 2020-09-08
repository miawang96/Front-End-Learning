import { createRouter, createWebHistory } from 'vue-router';
import managementRoutes from './management';
import commonRoutes from './common';

const routes = [...managementRoutes, ...commonRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
