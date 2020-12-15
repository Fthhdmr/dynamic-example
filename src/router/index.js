import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import(/* webpackChunkName: "about" */ "../views/Detail.vue"),
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
