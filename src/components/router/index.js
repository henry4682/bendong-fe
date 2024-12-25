import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  // ... 其他路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
