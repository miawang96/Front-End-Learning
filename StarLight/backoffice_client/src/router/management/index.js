import Views from '@/views';
import { Management } from '@/layout';
import ViewNames from '@/constants/view-names';

const { ExamPaper, Log } = Views;

const managementRoutes = [
  {
    path: '/management',
    name: 'Management',
    component: Management,
    children: [
      {
        name: ViewNames.ExamPaper.List,
        path: 'exam_paper/list',
        component: ExamPaper.List,
        meta: { module: ViewNames.ExamPaper.List },
      },
      {
        name: ViewNames.ExamPaper.Edit,
        path: 'exam_paper/edit',
        component: ExamPaper.Edit,
        meta: { module: ViewNames.ExamPaper.List },
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
