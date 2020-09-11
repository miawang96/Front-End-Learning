<style lang="less" scoped>
.action-bar {
  background: #f8f8f9;
  border: 1px solid #edeff0;
  box-shadow: #edefe0;
  height: 40px;
  display: flex;
  justify-content: space-between;

  &-title {
    line-height: 40px;
    padding: 0 0 0 10px;
    font-size: 110%;
  }

  &-actions {
    padding: 3px 10px 2px 0;
  }
}
</style>

<template>
  <div class="action-bar">
    <div class="action-bar-title"><slot name="title"></slot></div>
    <div class="action-bar-actions"><slot name="actions"></slot></div>
  </div>
</template>

<script>
export default {};
</script>
