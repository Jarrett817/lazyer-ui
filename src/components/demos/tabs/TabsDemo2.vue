<demo>  示例二
</demo>
<template>
  <lazyer-tabs v-model:selected="chosen">
    <lazyer-tabs-item title="导航一">内容一</lazyer-tabs-item>
    <lazyer-tabs-item title="导航二">内容二</lazyer-tabs-item>
    <lazyer-tabs-item title="这是导航三">内容三</lazyer-tabs-item>
  </lazyer-tabs>
</template>

<script lang="ts">
import {LazyerTabsItem} from "../../../lib";
import {ref} from 'vue'
import {LazyerTabs} from "../../../lib";
export default {
  components: {LazyerTabs, LazyerTabsItem},
  setup(){
    const chosen=ref('导航一')
    return {chosen}
  }
}
</script>

<style lang="scss" scoped>

</style>