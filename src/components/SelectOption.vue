<template>
  <div class="select-option">
    <div :class="`currency-flag currency-flag-${currency.toLowerCase()}`"></div>
    <span class="select-option-desc">{{ currency }}</span>
  </div>
</template>

<script>
export default {
  name: "SelectOption",
  props: {
    currency: String
  }
};
</script>

<style scoped lang="scss">
@import "~currency-flags/dist/currency-flags.min.css";

.select-option {
  display: flex;
  align-items: center;

  .select-option-desc {
    margin-left: 1rem;
  }
}
</style>
