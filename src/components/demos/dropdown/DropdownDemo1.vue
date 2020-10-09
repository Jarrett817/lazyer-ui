<demo>常规用法</demo>
<template>
  <lazyer-dropdown>
    <template v-slot:title>Hover me</template>
    <template v-slot:content>
      <lazyer-menu-item key="1" @click="sayHi"><a href="javascript:;">1st menu item</a></lazyer-menu-item>
      <lazyer-menu-item key="2"><a href="javascript:;">2st menu item</a></lazyer-menu-item>
      <lazyer-menu-item key="3"><a href="javascript:;">3st menu item</a></lazyer-menu-item>
      <lazyer-menu-item key="4"><a href="javascript:;">4st menu item</a></lazyer-menu-item>
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
    const sayHi=()=>{
      alert('hi')
    }
    return {
      sayHi
    }

  }

};
</script>

<style lang="scss" scoped>

</style>