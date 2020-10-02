<template>
  <div>
    <h2>Dialog对话弹框</h2>
    <Demo :component="DialogDemo1"></Demo>
    <Demo :component="DialogDemo2"></Demo>
  </div>
</template>

<script lang="ts">
import Demo from "../../Demo.vue";
import DialogDemo1 from "./DialogDemo1.vue";
import DialogDemo2 from "./DialogDemo2.vue";

export default {
  components: {Demo},
  setup() {
    return {
      DialogDemo1,
      DialogDemo2,
    };
  }
};
</script>
