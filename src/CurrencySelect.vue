<template>
  <div class="vcs-root">
    <template v-if="label">
      <label class="vcs-select-label">{{ label }}</label>
    </template>
    <select-picker
      :options="options"
      v-model="currency"
      :selected-option-id="selectedOptionId"
      :show-deselect-btn="showDeselectBtn"
    ></select-picker>
  </div>
</template>

<script>
import SelectPicker from "@components/SelectPicker";
import { generateCurrencyCountryMap } from "@/utils/currencyCountryMap";
import "./styles/global.scss";

export default {
  name: "vCurrencySelect",
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
    selectedOptionId: String,
    showDeselectBtn: {
      type: Boolean,
      default: false
    }
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

<style lang="scss">
@import "./styles/variables";

.vcs-root {
  width: $vs-dropdown-min-width;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .vcs-select-label {
    font-size: 14px;
    margin-bottom: 6.5px;
  }
}
</style>
