<template>
  <v-select class="v-select-custom-styles" label="currency" :options="options">
    <template #option="{ currency }">
      <select-option :currency="currency" />
    </template>

    <template #selected-option="{ currency }">
      <select-option :currency="currency" />
    </template>

    <template #no-options>
      <span style="color: darkgray">No results</span>
    </template>
  </v-select>
</template>

<script>
import vSelect from "vue-select";
import SelectOption from "@components/SelectOption";

export default {
  name: "SelectPicker",
  components: {
    vSelect,
    SelectOption
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
