<demo>  示例一
</demo>
<template>
  <Tabs v-model:selected="chosen">
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../../../lib/Tabs.vue";
import Tab from "../../../lib/Tab.vue";
import {ref} from 'vue'
export default {
  components: {Tabs, Tab},
  setup(){
    const chosen=ref('导航一')
    return {chosen}
  }
};
</script>

<style lang="scss" scoped>

</style>