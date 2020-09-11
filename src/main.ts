import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import qrCode from "./assets/qrcode.png";

Vue.config.productionTip = false;

Vue.component("Nav", Nav);
Vue.component("Layout", Layout);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

if (document.documentElement.clientWidth > 500) {
  window.alert("请扫描二维码使用手机打开，以保证预览效果");
  const img = document.createElement("img");
  img.src = qrCode;
  img.style.position = "fixed";
  img.style.left = "50%";
  img.style.top = "50%";
  img.style.transform = "translate(-50%,-50%)";
  document.body.appendChild(img);
}
