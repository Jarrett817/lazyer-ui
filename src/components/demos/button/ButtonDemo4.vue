<demo>禁用状态</demo>
<template>
  <div>
    <Button disabled>disabled</Button>
    <Button theme="link" disabled>link-disabled</Button>
    <Button theme="text" disabled>text-disabled</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";

export default {
  components: {Button}
}
</script>

<style lang="scss" scoped>

</style>