<demo>
常规用法
</demo>
<template>
  <Switch v-model:value="bool1"/>
  <Switch theme="trendy" v-model:value="bool2"/>

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
    const bool1 = ref(true);
    const bool2 = ref(true);
    return {
      bool1,bool2
    };
  }
};
</script>

<style lang="scss" scoped>

</style>