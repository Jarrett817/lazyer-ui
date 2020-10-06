<demo>
加载状态
</demo>
<template>
  <lazyer-switch v-model:value="bool1" loading/>
  <lazyer-switch v-model:value="bool2" loading/>
  <lazyer-switch theme="trendy" v-model:value="bool1" loading/>
  <lazyer-switch theme="trendy" v-model:value="bool2" loading/>
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