import CurrencySelect from "./CurrencySelect";

export default {
  install(Vue) {
    // register component globally
    Vue.component("currency-select", CurrencySelect);
  }
};

export { CurrencySelect };
