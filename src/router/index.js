import Vue from "vue";
import VueRouter from "vue-router";
import MSite from "@/pages/MSite/MSite.vue";
import Order from "@/pages/Order/Order.vue";
import Profile from "@/pages/Profile/Profile.vue";
import Search from "@/pages/Search/Search.vue";
import Login from "@/pages/Login/Login.vue";
Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/msite",
      component: MSite,
      meta: {
        FooterGuide: true,
      },
    },
    {
      path: "/order",
      component: Order,
      meta: {
        FooterGuide: true,
      },
    },
    {
      path: "/profile",
      component: Profile,
      meta: {
        FooterGuide: true,
      },
    },
    {
      path: "/search",
      component: Search,
      meta: {
        FooterGuide: true,
      },
    },
    { path: "/", redirect: "/msite" },
    { path: "/login", component: Login },
  ],
});
