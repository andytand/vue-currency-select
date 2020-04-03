import Vue from "vue";
import CurrencySelect from "./CurrencySelect.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(CurrencySelect)
}).$mount("#app");
