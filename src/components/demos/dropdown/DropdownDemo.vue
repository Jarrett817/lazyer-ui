<template>
  <div>
    <h2>Dropdown下拉菜单</h2>
    <Synopsis :content="dropdownMd"/>
    <Demo :component="DropdownDemo1"/>
  </div>
</template>

<script lang="ts">
import Demo from "../../Demo.vue";
import dropdownMd from '../../../markdown/synopsis/dropdown.md';
import DropdownDemo1 from "./DropdownDemo1.vue";
export default  {
  components: {Demo},
  setup(){
    return{
      dropdownMd,DropdownDemo1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>