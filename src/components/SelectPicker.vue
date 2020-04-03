<template>
  <label>
    {{ pickerLabel }}
    <select>
      <option value="Testing">Testing</option>
      <option value="Only">Only</option>
    </select>
  </label>
</template>

<script>
export default {
  name: "SelectPicker",
  props: {
    pickerLabel: String
  }
};
</script>

<style scoped></style>
