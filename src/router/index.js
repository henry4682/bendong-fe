import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Auth/Login.vue";
import { useAuthStore } from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true}
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  // ... 其他路由配置
];
const path = process.env.NODE_ENV === 'production' ? '/bengtong-fe/' : ''
const history = createWebHistory(path)

const router = createRouter({
  history,
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/Login');
  } else if (to.path === '/Login' && authStore.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
