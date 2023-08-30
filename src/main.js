import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import axios from "axios";

const pinia = createPinia();
console.log(import.meta.env.VITE_API_KEY);
axios.defaults.headers.common["Authorization"] = import.meta.env.VITE_API_KEY;

createApp(App).use(router).use(pinia).mount("#app");
