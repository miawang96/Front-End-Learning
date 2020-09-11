<template>
  <div>
    <action-bar>
      <template v-slot:title>问卷列表页</template>
      <template v-slot:actions>
        <Button type="primary" icon="md-add">新建</Button>
      </template>
    </action-bar>
  </div>
</template>

<script>
import { ActionBar } from '@/components';
import { examPaperService } from '@/service';
export default {
  components: {
    ActionBar,
  },
  mounted() {
    examPaperService.getExamPapers().then(res => {
      const { result } = res;
      console.log(result);
    });
  },
};
</script>
