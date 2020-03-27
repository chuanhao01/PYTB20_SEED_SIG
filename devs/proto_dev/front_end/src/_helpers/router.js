import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/public/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/event/:eventid",
    name: "Event",
    component: () =>
      import(/* webpackChunkName: "event" */ "../views/public/Event.vue")
  },
  {
    path: "/user/:userid",
    name: "User Profile",
    component: () =>
      import(/* webpackChunkName: "event" */ "../views/user/Profile.vue")
  },
  {
    path: "/user/:userid/activity",
    name: "User Activity",
    component: () =>
      import(/* webpackChunkName: "event" */ "../views/user/Activities.vue")
  },
  {
    path: "/admin/dashboard",
    name: "Admin Dashboard",
    component: () =>
      import(/* webpackChunkName: "event" */ "../views/admin/AdminDashboard.vue")
  },

  // login/register
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/public/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/public/Register.vue")
  },

  // otherwise redirect to home
  { path: "*", redirect: "/" }
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register", "/", "/event/:eventid"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});
