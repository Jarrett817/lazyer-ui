<demo>波纹选项</demo>
<template>
  <div>
    <Button ripple>普通波纹</Button>
    <Button theme="link" ripple>链接波纹</Button>
    <Button theme="text" ripple>波纹</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";
export default  {
  components: {Button}
}
</script>

<style lang="scss" scoped>

</style>