<template>
  <MarkDown :content="content"></MarkDown>
</template>

<script lang="ts">

import MarkDown from "./MarkDown.vue";

export default {
  props: {
    content:{
      type: String
    }
  },
  components: {MarkDown}
};
</script>

<style lang="scss" scoped>
article {
  color: grey;
  box-shadow: .5px 1px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 16px 16px;
}
</style>