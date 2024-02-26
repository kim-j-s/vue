import './assets/mixin.scss';
import './assets/variable.scss';
import './assets/common.scss';
import './assets/layout.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
