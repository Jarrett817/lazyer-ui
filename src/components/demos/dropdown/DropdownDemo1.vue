<template>
  <lazyer-dropdown>
    <template v-slot:title>Hover me</template>
    <template v-slot:content>
      <lazyer-menu-item>1st menu item</lazyer-menu-item>
      <lazyer-menu-item>2st menu item</lazyer-menu-item>
      <lazyer-menu-item>3st menu item</lazyer-menu-item>
    </template>
  </lazyer-dropdown>
</template>

<script lang="ts">
import {LazyerDropdown,LazyerMenuItem} from "../../../lib";

export default {
  components: {
    LazyerDropdown,LazyerMenuItem
  },
  setup() {
  }

};
</script>

<style lang="scss" scoped>

</style>