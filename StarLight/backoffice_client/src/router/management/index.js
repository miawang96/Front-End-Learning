import Views from '@/views';
import { Management } from '@/layout';
import ViewNames from '@/constants/view-names';

const { Survey, Log } = Views;

const managementRoutes = [
  {
    path: '/management',
    name: 'Management',
    component: Management,
    children: [
      {
        name: ViewNames.Survey.List,
        path: 'survey/list',
        component: Survey.List,
        meta: { module: ViewNames.Survey.List },
      },
      {
        name: ViewNames.Survey.Edit,
        path: 'survey/edit',
        component: Survey.Edit,
        meta: { module: ViewNames.Survey.List },
      },
      {
        name: ViewNames.Log.List,
        path: 'log',
        component: Log.List,
      },
    ],
  },
];

export default managementRoutes;
