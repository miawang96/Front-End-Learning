<style lang="less" scoped>
.edit-exam-paper {
  &-btn {
    margin-left: 5px;
  }
}
</style>

<template>
  <div class="edit-exam-paper">
    <action-bar>
      <template v-slot:title>试题编辑页</template>
      <template v-slot:actions>
        <Button type="default" icon="ios-undo-outline">返回</Button>
        <Button type="primary" icon="ios-list-box-outline" class="edit-exam-paper-btn">保存</Button>
        <Button type="primary" icon="ios-send-outline" class="edit-exam-paper-btn">发布</Button>
      </template>
    </action-bar>
    <div>
      <Divider orientation="left">试题基本信息</Divider>
    </div>
    <div>
      <Divider orientation="left">编辑题目内容</Divider>
      <subject v-for="(subject, index) in subjects" :key="index" :subject="subject"></subject>
    </div>
  </div>
</template>

<script>
import { ActionBar, Subject } from '@/components';
export default {
  data() {
    return {
      subjects: [
        {
          title: '',
          items: [],
          answers: [],
        },
      ],
    };
  },
  components: {
    ActionBar,
    Subject,
  },
};
</script>
