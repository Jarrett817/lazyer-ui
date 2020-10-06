<demo>组件方式打开
</demo>
<template>
  <lazyer-button @click="toggle">toggle</lazyer-button>
  <lazyer-dialog v-model:visible="x" :closeOnClickOverlay="true"
          :ok="f1" :cancel="f2">
    <template v-slot:content>
      <div>hello</div>
      <div>world</div>
    </template>
    <template v-slot:title>
      <strong>加粗标题</strong>
    </template>
  </lazyer-dialog>
</template>

<script lang="ts">
import {ref} from "vue";
import {LazyerDialog} from "../../../lib";
import {LazyerButton} from "../../../lib";

export default {
  components: {
    LazyerButton,
    LazyerDialog,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {
    };
    return {
      x,
      toggle,
      f1,
      f2,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>