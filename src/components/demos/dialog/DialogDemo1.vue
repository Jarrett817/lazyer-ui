<demo>openDialog打开</demo>
<template>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";
import {openDialog} from "../../../lib/openDialog";

export default {
  components: {
    Button,
  },
  setup() {
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
      showDialog
    };
  },
};
</script>

<style lang="scss" scoped>

</style>