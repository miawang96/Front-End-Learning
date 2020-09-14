import ViewNames from '../view-names';

export default [
  {
    name: 'exam_paper_management',
    display: '试题管理',
    icon: 'ios-paper',
    items: [
      {
        name: ViewNames.ExamPaper.List,
        display: '试题列表',
      },
    ],
  },
  {
    name: ViewNames.Log.List,
    display: '更新日志',
    icon: 'ios-people',
  },
];
