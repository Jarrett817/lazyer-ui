<template>
  <div>
    <h2>Tabs标签切换</h2>
    <Demo :component="TabsDemo1"></Demo>
  </div>
</template>

<script lang="ts">
import TabsDemo1 from "./TabsDemo1.vue";
import Demo from "../../Demo.vue";

export default {
  components: {Demo,},
  setup() {
    return {
      TabsDemo1
    };
  }

};
</script>