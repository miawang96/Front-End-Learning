import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ViewUI from 'view-design';

createApp(App)
  .use(store)
  .use(router)
  .use(ViewUI)
  .mount('#app');
