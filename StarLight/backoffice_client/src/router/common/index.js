import { Common } from '@/layout';
import { CommonViews } from '@/views';
import { viewNames } from '@/constants';

// 去根目录的如果没有登录信息的额，则跳到登录页面
// 否则跳到首页
// 404页面的跳转处理

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
