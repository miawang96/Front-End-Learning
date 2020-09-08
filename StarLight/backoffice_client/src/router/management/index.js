import { About } from '@/views';
import { Management } from '@/layout';

const managementRoutes = [
  {
    path: '/manage',
    name: 'Manage',
    component: Management,
    children: [
      {
        path: 'about',
        component: About,
      },
    ],
  },
];

export default managementRoutes;
