<template>
  <div>this is subject item component</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    subject: {
      type: Object,
      required: true,
    },
  },
};
</script>
