import { ManagementViews } from '@/views';
import { Management } from '@/layout';
import { viewNames } from '@/constants';

const { ExamPaper, Log } = ManagementViews;

const managementRoutes = [
  {
    path: '/management',
    name: 'Management',
    component: Management,
    children: [
      {
        name: viewNames.ExamPaper.List,
        path: 'exam_paper/list',
        component: ExamPaper.List,
        meta: { module: viewNames.ExamPaper.List },
      },
      {
        name: viewNames.ExamPaper.Edit,
        path: 'exam_paper/edit',
        component: ExamPaper.Edit,
        meta: { module: viewNames.ExamPaper.List },
      },
      {
        name: viewNames.ExamPaper.Detail,
        path: 'exam_paper/detail/:id',
        component: ExamPaper.Detail,
        meta: { module: viewNames.ExamPaper.List },
      },
      {
        name: viewNames.Log.List,
        path: 'log',
        component: Log.List,
      },
    ],
  },
];

export default managementRoutes;
