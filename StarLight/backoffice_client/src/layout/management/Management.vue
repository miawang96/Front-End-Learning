<template>
  <div>
    <Header />
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { Header, Footer, Menu } from '@/components';
export default {
  components: {
    Header,
    Footer,
    Menu,
  },
};
</script>
