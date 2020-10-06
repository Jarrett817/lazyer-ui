<demo>禁用状态</demo>
<template>
  <div>
    <lazyer-button disabled>disabled</lazyer-button>
    <lazyer-button theme="link" disabled>link-disabled</lazyer-button>
    <lazyer-button theme="text" disabled>text-disabled</lazyer-button>
  </div>
</template>

<script lang="ts">
import {LazyerButton} from "../../../lib";

export default {
  components: {LazyerButton}
}
</script>

<style lang="scss" scoped>

</style>