import vCurrencySelect from "./CurrencySelect";

export default {
  install(Vue) {
    // register component globally
    Vue.component("v-currency-select", vCurrencySelect);
  }
};

export { vCurrencySelect };
