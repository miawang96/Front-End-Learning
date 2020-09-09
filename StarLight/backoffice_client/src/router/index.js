import Router from 'vue-router';
import Vue from 'vue';
import managementRoutes from './management';
import commonRoutes from './common';

const routes = [...managementRoutes, ...commonRoutes];

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
