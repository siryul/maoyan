import { createApp } from 'vue';
import './style.css';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { piniaLogger } from './store/plugins/logger';

const pinia = createPinia();
pinia.use(piniaLogger);

createApp(App).use(router).use(pinia).mount('#app');
