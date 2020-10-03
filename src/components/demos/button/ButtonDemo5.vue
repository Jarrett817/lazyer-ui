<demo>加载状态</demo>
<template>
  <ol>
    <li>
      <Button loading>loading</Button>
      <Button>done</Button>
    </li>
    <br />
    <li>
      <Button theme="link" loading>link-loading</Button>
      <Button theme="text" loading>text-loading</Button>
    </li>
  </ol>
</template>

<script lang="ts">

import Button from "../../../lib/Button.vue";

export default {
  components: {Button}
};
</script>

<style lang="scss" scoped>

</style>