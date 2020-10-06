<template>
  <div class="item">
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
.item{
  &:hover{
    background:#e6f7ff;
    margin:0 -10px;
    text-align: center;
  }
}
</style>