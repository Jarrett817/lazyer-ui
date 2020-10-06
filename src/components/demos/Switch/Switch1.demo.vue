<demo>
常规用法
</demo>
<template>
  <lazyer-switch v-model:value="bool1"/>
  <lazyer-switch theme="trendy" v-model:value="bool2"/>

</template>
<script lang="ts">

import {LazyerSwitch} from "../../../lib";
import {
  ref
} from "vue";

export default {
  components: {
    LazyerSwitch
  },

  setup() {
    const bool1 = ref(true);
    const bool2 = ref(true);
    return {
      bool1, bool2
    };
  }
};
</script>

<style lang="scss" scoped>

</style>