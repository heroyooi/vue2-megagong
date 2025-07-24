import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css"; // swiper 5용 css

import "./assets/base.scss";

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
