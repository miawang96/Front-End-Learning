<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { userService } from './service';

export default {
  name: 'App',
  components: {},
  mounted: () => {
    userService.getUsers().then(data => {
      console.log(`this is ${data}`);
    });
    console.log(process.env.NODE_ENV);
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
