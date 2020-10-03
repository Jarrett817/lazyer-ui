<demo>组件方式打开
</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="true"
          :ok="f1" :cancel="f2">
    <template v-slot:content>
      <div>hello</div>
      <div>world</div>
    </template>
    <template v-slot:title>
      <strong>加粗标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../../../lib/Dialog.vue";
import Button from "../../../lib/Button.vue";
import {ref} from "vue";

export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      console.log(x.value);
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