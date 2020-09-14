import { formatToDateTime, getEnumDisplayByValue } from '@/utils';
import { enums } from '@/constants';

const { ExamPaperTypeEnum } = enums;

// 加括号的函数体返回对象字面量表达式
const formatData = data =>
  data.map(item => ({
    id: item._id,
    type: getEnumDisplayByValue(ExamPaperTypeEnum, item.type),
    amount: item.amount,
    creationTime: formatToDateTime(item.creationTime),
    fullMarks: item.fullMarks,
    name: item.name,
  }));

export { formatData };
