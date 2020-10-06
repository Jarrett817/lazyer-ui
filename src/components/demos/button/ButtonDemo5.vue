<demo>加载状态</demo>
<template>
  <ol>
    <li>
      <lazyer-button loading>loading</lazyer-button>
      <lazyer-button>done</lazyer-button>
    </li>
    <br />
    <li>
      <lazyer-button theme="link" loading>link-loading</lazyer-button>
      <lazyer-button theme="text" loading>text-loading</lazyer-button>
    </li>
  </ol>
</template>

<script lang="ts">
import {LazyerButton} from "../../../lib";

export default {
  components: {LazyerButton}
};
</script>

<style lang="scss" scoped>

</style>