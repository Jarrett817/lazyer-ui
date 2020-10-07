<template>
  <div>
      <slot/>
  </div>
</template>

<script lang="ts">
import Tab from "./LazyerTabsItem.vue";

export default {
  setup(context) {

  }
};
</script>

<style lang="scss" scoped>
::v-deep(a) {
  display: block;
  padding: 5px 12px;

  &:hover {
    background: #e6f7ff;
    text-align: center;
    text-decoration: none;
  }
}
</style>