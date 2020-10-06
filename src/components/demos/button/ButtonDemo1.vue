<demo>主题选项</demo>
<template>
  <div>
    <lazyer-button>default</lazyer-button>
    <lazyer-button theme="button">button</lazyer-button>
    <lazyer-button theme="link">link</lazyer-button>
    <lazyer-button theme="text">text</lazyer-button>
  </div>
</template>

<script lang="ts">
import {LazyerButton} from "../../../lib";
export default {
  components: {LazyerButton},
}
</script>

<style lang="scss" scoped>
</style>