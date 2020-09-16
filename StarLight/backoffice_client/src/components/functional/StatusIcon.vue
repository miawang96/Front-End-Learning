<template>
  <div>
    <Tag :color="color">{{ content }}</Tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: '',
      content: '',
    };
  },
  props: {
    status: {
      type: String,
      required: true,
    },
  },
  mounted() {},
};
</script>
