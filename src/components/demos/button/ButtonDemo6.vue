<demo>波纹选项</demo>
<template>
  <div>
    <Button ripple>default-ripple</Button>
    <Button theme="link" ripple>link-ripple</Button>
    <Button theme="text" ripple>text-ripple</Button>
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