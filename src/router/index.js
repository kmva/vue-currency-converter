import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main";
import Currency from "../views/Currency"
import Currencies from "../components/Currencies"
import Converter from "../components/Converter"

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {
      layout: Main
    }
  },
  {
    path: "/Currency",
    name: "Currency",
    component: Currency,
    meta: {
      layout: Currency
    }
  },
  {
    path: "/Currencies",
    name: "Currencies",
    component: Currencies,
    meta: {
      layout: Currency
    }
  },
  {
    path: "/Converter",
    name: "/Converter",
    component: Converter,
    meta: {
      layout: Currency
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
