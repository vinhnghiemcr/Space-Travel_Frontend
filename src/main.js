import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';


import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

createApp(App).use(BalmUI).use(BalmUIPlus).use(BootstrapVue3).use(router).mount('#app')
