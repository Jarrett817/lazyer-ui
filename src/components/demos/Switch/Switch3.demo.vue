<demo>
加载状态
</demo>
<template>
  <Switch v-model:value="bool1" loading/>
  <Switch v-model:value="bool2" loading/>
  <Switch theme="trendy" v-model:value="bool1" loading/>
  <Switch theme="trendy" v-model:value="bool2" loading/>
</template>

<script lang="ts">

import Switch from "../../../lib/Switch.vue";
import {
  ref
} from "vue";

export default {
  components: {
    Switch
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