<template>
  <div>
    <h2>Switch开关</h2>
    <Synopsis :content="switchMd"/>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
    <Demo :component="Switch3Demo"/>
  </div>
</template>

<script lang="ts">
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Switch3Demo from "./Switch3.demo.vue";
import Synopsis from "../../Synopsis.vue";
import switchMd from "../../../markdown/synopsis/switch.md"
import Demo from "../../Demo.vue";


export default {
  components: {
    Demo
  },
  setup() {
    return {
      Switch1Demo, Switch2Demo,Switch3Demo,Synopsis,switchMd
    };
  }
};
</script>
