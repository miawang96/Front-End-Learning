<template>
  <div>this is exam-paper detail page. Id: {{ id }}</div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  },
};
</script>
