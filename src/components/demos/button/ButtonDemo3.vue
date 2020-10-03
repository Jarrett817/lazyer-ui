<demo>状态等级</demo>
<template>
  <div>
    <div>
      <Button level="main">main</Button>
      <Button>default</Button>
      <Button level="danger">danger</Button>
    </div>
    <br/>
    <div>
      <Button theme="link" level="main">link-main</Button>
      <Button theme="link">link-default</Button>
      <Button theme="link" level="danger">link-danger</Button>
    </div>
    <br/>
    <div>
      <Button theme="text" level="main">text-main</Button>
      <Button theme="text">text-default</Button>
      <Button theme="text" level="danger">text-danger</Button>
    </div>
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