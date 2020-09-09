import Views from '@/views';
import { Management } from '@/layout';

const { Survey } = Views;

const managementRoutes = [
  {
    path: '/management',
    name: 'Management',
    component: Management,
    children: [
      {
        name: 'SurveyList',
        path: 'survey',
        component: Survey.List,
      },
    ],
  },
];

export default managementRoutes;
