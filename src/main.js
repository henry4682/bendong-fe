import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/app.scss';
import router from './components/router';

const app = createApp(App);

app.use(router);
// app.use(store);
app.mount('#app');
