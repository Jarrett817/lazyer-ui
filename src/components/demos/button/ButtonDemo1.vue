<demo>主题选项</demo>
<template>
  <div>
    <Button>default</Button>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";
export default {
  components: {Button},
}
</script>

<style lang="scss" scoped>
</style>