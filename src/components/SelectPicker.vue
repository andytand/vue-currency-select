<template>
  <v-select
    class="v-select-custom-styles"
    label="currency"
    :options="options"
  ></v-select>
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

<style lang="scss">
@import "../styles/variables";

.v-select-custom-styles {
  width: $vs-dropdown-min-width;

  .vs__dropdown-option {
    padding: 10px 15px;
  }
}
</style>
