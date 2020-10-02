<template>
  <div>
    <h2>Button按钮</h2>
    <Demo :component="ButtonDemo1"/>
    <Demo :component="ButtonDemo6"/>
    <Demo :component="ButtonDemo2"/>
    <Demo :component="ButtonDemo3"/>
    <Demo :component="ButtonDemo4"/>
    <Demo :component="ButtonDemo5"/>
  </div>
</template>

<script lang="ts">
import Demo from "../../Demo.vue";
import Button from "../../../lib/Button.vue";
import ButtonDemo1 from "./ButtonDemo1.vue";
import ButtonDemo2 from "./ButtonDemo2.vue";
import ButtonDemo3 from "./ButtonDemo3.vue";
import ButtonDemo4 from "./ButtonDemo4.vue";
import ButtonDemo5 from "./ButtonDemo5.vue";
import ButtonDemo6 from "./ButtonDemo6.vue";

export default {
  components: {
    Button, Demo
  },
  setup() {
    return {ButtonDemo1, ButtonDemo2, ButtonDemo3, ButtonDemo4, ButtonDemo5, ButtonDemo6};
  }
};
</script>
