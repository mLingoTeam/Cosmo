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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Ship.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
