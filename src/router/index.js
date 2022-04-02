import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import("../views/FrontView.vue"),
    children: [
      {
        path: "/",
        component: () =>
          import("../views/FrontIndex.vue"),
      },
      {
        path: "products",
        component: () =>
          import("../views/FrontProducts.vue"),
      },
      {
        path: "brand",
        component: () =>
          import("../views/FrontBrand.vue"),
      },
      {
        path: "questions",
        component: () =>
          import("../views/FrontQuestions.vue"),
      },
      {
        path: "carts",
        component: () =>
          import("../views/FrontCarts.vue"),
      },
      {
        path: "check",
        component: () =>
          import("../views/FrontCheckOut.vue"),
      },
    ]
  },
  {
    path: "/admin",
    component: () =>
      import("../views/AdminView.vue"),
    children: [
      {
        path: "orders",
        component: () =>
          import("../views/AdminOrders.vue"),
      },
      {
        path: "products",
        component: () =>
          import("../views/AdminProducts.vue"),
      },
      {
        path: "coupons",
        component: () =>
          import("../views/AdminCoupons.vue"),
      },
    ]
  },
  {
    path: "/login",
    component: () =>
      import("../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
