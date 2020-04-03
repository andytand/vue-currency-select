<template>
  <div id="app">
    <select-picker :picker-label="pickerLabel"></select-picker>
  </div>
</template>

<script>
import SelectPicker from "@components/SelectPicker";

export default {
  name: "CurrencySelect",
  components: {
    SelectPicker
  },
  props: {
    pickerLabel: String
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
