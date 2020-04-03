<template>
  <v-select :options="options"></v-select>
</template>

<script>
import vSelect from "vue-select";

export default {
  name: "SelectPicker",
  components: {
    vSelect
  },
  props: {
    options: Array
  }
};
</script>

<style scoped></style>
