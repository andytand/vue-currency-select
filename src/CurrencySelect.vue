<template>
  <div class="currency-select-root">
    <template v-if="label">
      <label class="select-label">{{ label }}</label>
    </template>
    <select-picker
      :options="options"
      v-model="currency"
      :selected-option-id="selectedOptionId"
    ></select-picker>
  </div>
</template>

<script>
import SelectPicker from "@components/SelectPicker";
import { generateCurrencyCountryMap } from "@/utils/currencyCountryMap";
import "./styles/global.scss";

export default {
  name: "CurrencySelect",
  components: {
    SelectPicker
  },
  props: {
    label: String,
    options: {
      type: Array,
      default: generateCurrencyCountryMap
    },
    value: String,

    // selectedOptionId is added for vanilla JS
    // compatibility. It allows selected value to be
    // obtained by using vanilla JS (or JQuery)
    selectedOptionId: String
  },
  computed: {
    currency: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "./styles/variables";

.currency-select-root {
  width: $vs-dropdown-min-width;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .select-label {
    font-size: 14px;
    margin-bottom: 6.5px;
  }
}
</style>
