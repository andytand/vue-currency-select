<template>
  <v-select
    v-model="selectedCurrency"
    class="v-select-custom-styles"
    label="currency"
    :options="options"
    :reduce="option => option.currency"
    :components="!showDeselectBtn ? { Deselect } : null"
  >
    <template #option="{ currency }">
      <select-option :currency="currency" />
    </template>

    <template #selected-option="{ currency }">
      <select-option :id="selectedOptionId" :currency="currency" />
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
    value: String,
    options: Array,
    selectedOptionId: String,
    showDeselectBtn: Boolean
  },
  data() {
    return {
      Deselect: {
        render: h => h("span", "")
      }
    };
  },
  computed: {
    selectedCurrency: {
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
@import "../styles/variables";

.v-select-custom-styles {
  width: $vs-dropdown-min-width;

  .vs__dropdown-option {
    padding: 10px 15px;
  }
}
</style>
