import router from '@/router';
import { viewNames } from '@/constants';

const isAuthenticated = true;

router.beforeEach((to, from, next) => {
  if (to.name !== viewNames.Login && !isAuthenticated) next({ name: viewNames.Login });
  else next();
});
