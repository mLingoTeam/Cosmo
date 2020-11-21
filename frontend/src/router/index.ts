import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<any> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/ship",
    name: "Ship",
    component: () => import(/* webpackChunkName: "about" */ "../views/Ship.vue")
  },
  {
    path: "/galaxy",
    name: "Galaxy",
    component: () =>
      import(/* webpackChunkName: "galaxy" */ "../views/Galaxy.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
