import { createRouter, createWebHistory } from "vue-router";
import WelcomeLayout from "../layouts/WelcomeLayout";
import CurrencyLayout from "../layouts/CurrencyLayout"
import Currencies from "../views/Currencies"
import Converter from "../views/Converter"

const routes = [
  {
    path: "/",
    name: "Main",
    component: WelcomeLayout,
    meta: {
      layout: WelcomeLayout
    }
  },
  {
    path: "/Currency",
    name: "Currency",
    component: CurrencyLayout,
    meta: {
      layout: CurrencyLayout
    }
  },
  {
    path: "/Currencies",
    name: "Currencies",
    component: Currencies,
    meta: {
      layout: CurrencyLayout
    }
  },
  {
    path: "/Converter",
    name: "/Converter",
    component: Converter,
    meta: {
      layout: CurrencyLayout
    }
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

export default router;
