<style lang="less" scoped>
.paper-card {
  &-content {
    &-item {
      display: flex;
      &-label {
        text-align: left;
        width: 25%;
      }

      &-value {
        font-weight: bold;
      }
    }
  }
}
</style>
<template>
  <div class="paper-card">
    <Card>
      <p slot="title">
        <Icon type="ios-paper-outline"></Icon>
        {{ paper.name }}
      </p>
      <a href="#" slot="extra" @click.prevent="viewDetail">
        <Icon type="ios-loop-strong"></Icon>查看
      </a>
      <div class="paper-card-content">
        <div class="paper-card-content-item">
          <span class="paper-card-content-item-label">数量：</span>
          <span class="paper-card-content-item-value">{{ paper.amount }}</span>
        </div>
        <div class="paper-card-content-item">
          <span class="paper-card-content-item-label">总分：</span>
          <span class="paper-card-content-item-value">{{ paper.fullMarks }}</span>
        </div>
        <div class="paper-card-content-item">
          <span class="paper-card-content-item-label">类型：</span>
          <span class="paper-card-content-item-value">{{ paper.type }}</span>
        </div>
        <div class="paper-card-content-item">
          <span class="paper-card-content-item-label">创建日期：</span>
          <span class="paper-card-content-item-value">{{ paper.creationTime }}</span>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import ViewNames from '@/constants/view-names';

export default {
  props: {
    paper: {
      type: Object,
      required: true,
    },
  },
  methods: {
    viewDetail() {
      this.$router.push({ name: ViewNames.ExamPaper.Detail, params: { id: 1 } });
    },
  },
};
</script>
