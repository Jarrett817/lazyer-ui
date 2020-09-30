<demo>示例1</demo>
<template>
  <div>
    <Button>你好</Button>
    <Button theme="button">普通</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
    <Button ripple>波纹</Button>
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