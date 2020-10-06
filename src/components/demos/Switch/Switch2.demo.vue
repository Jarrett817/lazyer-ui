<demo>
禁用状态
</demo>
<template>
  <lazyer-switch v-model:value="bool1" disabled/>
  <lazyer-switch v-model:value="bool2" disabled/>
  <lazyer-switch theme="trendy" v-model:value="bool2" disabled/>
  <lazyer-switch theme="trendy" v-model:value="bool1" disabled/>
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
    const bool1 = ref(false);
    const bool2 = ref(true);
    return {
      bool1,bool2
    };
  }
};
</script>

<style lang="scss" scoped>

</style>