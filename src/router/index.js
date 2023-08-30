import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SystemView from "../views/SystemView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/system",
        name: "system",
        component: SystemView,
    },
];

export const router = createRouter({
    routes,
    history: createWebHistory(),
});
