<template>
  <div>Dialog示例</div>
  <h1>示例一</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false"
          :ok="f1" :cancel="f2"
  >
    <template v-slot:content>
      <div>hello</div>
      <div>world</div>
    </template>
    <template v-slot:title>
      <strong>加粗标题</strong>
    </template>

  </Dialog>
  <h1>示例二</h1>
  <Button @click="showDialog">show</Button>

</template>

<script lang="ts">
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import {ref} from "vue";
import {openDialog} from "../../lib/openDialog";

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
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "hello",
        ok() {

        },
        cancel() {
        }

      });
    };
    return {
      x,
      toggle,
      f1,
      f2,
      showDialog
    };
  },
};
</script>
