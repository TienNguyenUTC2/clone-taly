import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import ProductDetail from "./components/ProductDetail.vue";
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/product",
    component: ProductDetail,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);
app.use(router);
app.mount("#app");
