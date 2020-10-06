<demo>波纹选项</demo>
<template>
  <div>
    <lazyer-button ripple>default-ripple</lazyer-button>
    <lazyer-button theme="link" ripple>link-ripple</lazyer-button>
    <lazyer-button theme="text" ripple>text-ripple</lazyer-button>
  </div>
</template>

<script lang="ts">
import {LazyerButton} from "../../../lib";
export default  {
  components: {LazyerButton}
}
</script>

<style lang="scss" scoped>

</style>