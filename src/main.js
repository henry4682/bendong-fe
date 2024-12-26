import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import App from './App.vue';
import './assets/scss/app.scss';
import router from './router';

const pinia = createPinia();
// 可以使狀態記錄到localStorage或是sessionStorage
pinia.use(piniaPluginPersistedState);

const app = createApp(App);


app.use(router).use(pinia).mount('#app');
