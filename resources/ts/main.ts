import { createPinia } from 'pinia';
import App from '@/views/App.vue';
import router from '@/router';
import '@/assets/sass/app.scss';
import 'virtual:svg-icons-register';

const pinia = createPinia();
const app = createApp(App);
app.config.performance = env('DEV');

app.use(router);
app.use(pinia);
app.mount('#app');
