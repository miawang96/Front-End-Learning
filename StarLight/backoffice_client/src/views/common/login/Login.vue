<style lang="less" scoped>
.login {
  height: 100%;
  position: relative;

  #particles-js {
    height: 100%;
  }

  @height: 50%;
  @width: 40%;
  &-form {
    position: absolute;
    height: calc(~'@{height}');
    width: calc(~'@{width}');
    top: calc(~'(100% - @{height})/2');
    left: calc(~'(100% - @{width})/2');
    border: 1px solid red;
  }
}
</style>

<template>
  <div class="login">
    <vue-particles class="login-effect" color="#dedede"></vue-particles>
    <div class="login-form">f</div>
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
