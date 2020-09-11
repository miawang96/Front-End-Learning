import { get } from '@/axios';

export default {
  getExamPapers: () => {
    return get('/exam_papers');
  },
};
