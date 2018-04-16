import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import User from "./views/User.vue";
import Add from "./views/Add.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/user/",
      component: Add
    },
    {
      path: "/user/:id",
      component: User
    }
  ],
  linkExactActiveClass: "active"
});
