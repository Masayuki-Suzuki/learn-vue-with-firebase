import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../views/Top.vue";
import Terms from "../views/Terms.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "top",
    component: Top
  },
  {
    path: "/terms",
    name: "terms",
    component: Terms
  }
];

/* eslint-disable no-new */
const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
