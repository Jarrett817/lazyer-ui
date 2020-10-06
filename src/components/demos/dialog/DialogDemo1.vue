<demo>openDialog打开</demo>
<template>
  <lazyer-button @click="showDialog">show</lazyer-button>
</template>

<script lang="ts">
import {openDialog} from "../../../lib/openDialog";
import {LazyerButton} from "../../../lib";

export default {
  components: {
    LazyerButton,
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