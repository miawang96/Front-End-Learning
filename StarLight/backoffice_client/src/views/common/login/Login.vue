<style lang="less" scoped>
.login {
  position: relative;
  height: 100%;

  &-img {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 100%;
  }

  &-effect {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
}
</style>

<template>
  <div class="login">
    <img class="login-img" :src="backgroundImage" />
    <vue-particles class="login-effect" color="#dedede"></vue-particles>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage: require('../../../assets/background.jpg'),
    };
  },
};
</script>
