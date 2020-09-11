<style lang="less" scoped>
.exam-paper-list {
  .paper-cards {
    &-col {
      margin-top: 30px;
    }
  }
}
</style>
<template>
  <div class="exam-paper-list">
    <action-bar>
      <template v-slot:title>问卷列表页</template>
      <template v-slot:actions>
        <Button type="primary" icon="md-add">新建</Button>
      </template>
    </action-bar>
    <div class="paper-cards">
      <Row :gutter="24">
        <Col
          span="6"
          v-for="(paper, index) in examPapers"
          :key="index"
          class-name="paper-cards-col"
        >
          <paper-card :paper="paper" />
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import { ActionBar, PaperCard } from '@/components';
import { examPaperService } from '@/service';
export default {
  data() {
    return {
      examPapers: [],
    };
  },
  components: {
    ActionBar,
    PaperCard,
  },
  mounted() {
    examPaperService.getExamPapers().then(res => {
      const { result } = res;
      this.examPapers = result.data;
    });
  },
};
</script>
