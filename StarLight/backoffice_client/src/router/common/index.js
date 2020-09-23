import { Common } from '@/layout';
import { CommonViews } from '@/views';
import { viewNames } from '@/constants';

const commonRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Common,
    children: [
      {
        path: 'login',
        name: viewNames.Login,
        component: CommonViews.Login,
      },
      {
        path: '*',
        name: viewNames.Error.NotFound,
        component: CommonViews.Error404,
      },
    ],
  },
];

export default commonRoutes;
