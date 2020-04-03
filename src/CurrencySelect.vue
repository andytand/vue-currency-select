<template>
  <div id="app">
    <select-picker-label :picker-label="pickerLabel">
      <select-picker :options="options"></select-picker>
    </select-picker-label>
  </div>
</template>

<script>
import SelectPicker from "@components/SelectPicker";
import SelectPickerLabel from "@components/SelectPickerLabel";
import { generateCurrencyCountryMap } from "@/utils/currencyCountryMap";
import "./styles/global.scss";

export default {
  name: "CurrencySelect",
  components: {
    SelectPicker,
    SelectPickerLabel
  },
  props: {
    pickerLabel: String,
    options: {
      type: Array,
      default: generateCurrencyCountryMap
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
