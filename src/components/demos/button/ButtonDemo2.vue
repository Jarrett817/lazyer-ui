<demo>尺寸选项</demo>
<template>
  <div>
    <Button size="big">bigSize</Button>
    <Button>default</Button>
    <Button size="small">small</Button>
  </div>
  <br/>
  <div>
    <Button theme="link" size="big">bigSize</Button>
    <Button theme="link">default</Button>
    <Button size="small" theme="link">small</Button>
  </div>
  <br/>
  <div>
    <Button size="big" theme="text">bigSize</Button>
    <Button theme="text">default</Button>
    <Button size="small" theme="text">small</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";

export default {
  components: {Button}
};
</script>

<style lang="scss" scoped>

</style>