<demo>尺寸选项</demo>
<template>
  <div>
    <lazyer-button size="big">bigSize</lazyer-button>
    <lazyer-button>default</lazyer-button>
    <lazyer-button size="small">small</lazyer-button>
  </div>
  <br/>
  <div>
    <lazyer-button theme="link" size="big">bigSize</lazyer-button>
    <lazyer-button theme="link">default</lazyer-button>
    <lazyer-button size="small" theme="link">small</lazyer-button>
  </div>
  <br/>
  <div>
    <lazyer-button size="big" theme="text">bigSize</lazyer-button>
    <lazyer-button theme="text">default</lazyer-button>
    <lazyer-button size="small" theme="text">small</lazyer-button>
  </div>
</template>

<script lang="ts">
import {LazyerButton} from "../../../lib";

export default {
  components: {LazyerButton}
};
</script>

<style lang="scss" scoped>

</style>