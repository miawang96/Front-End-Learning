<template>
  <div>
    <Card>
      <p slot="title"><Icon type="ios-paper-outline"></Icon> {{ paper.name }}</p>
      <a href="#" slot="extra" @click.prevent="viewDetail">
        <Icon type="ios-loop-strong"></Icon>
        查看
      </a>
      <ul></ul>
    </Card>
  </div>
</template>

<script>
export default {
  props: {
    paper: {
      type: Object,
      required: true,
    },
  },
  methods: {
    viewDetail() {},
  },
};
</script>
