import vCurrencySelect from "./CurrencySelect";

// Declare install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  // register component globally
  Vue.component("v-currency-select", vCurrencySelect);
}

// Create module definition for Vue.use()
const plugin = {
  install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

vCurrencySelect.install = install;

// To allow use as module (npm/webpack/etc.) export component
export default vCurrencySelect;
