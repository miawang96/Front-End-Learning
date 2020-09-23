import Vue from 'vue';
import VueParticles from 'vue-particles';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/components/iview';

import './interceptors';
import './style/main.less';

Vue.config.productionTip = false;

Vue.use(VueParticles);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
