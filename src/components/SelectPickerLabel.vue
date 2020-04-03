<template>
  <label>
    {{ pickerLabel }}
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "SelectPickerLabel",
  props: {
    pickerLabel: String
  }
};
</script>
