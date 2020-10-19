<template>
  <div class="demo">
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <h5>{{ component.__sourceCodeTitle }}</h5>
    <div class="description">
      <div class="demo-actions">
        <Button size="small" @click="hideCode" v-if="codeVisible">hide</Button>
        <Button size="small" @click="showCode" v-else>code</Button>
      </div>
      <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="html"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/LazyerButton.vue";
import "prismjs";
import "../assets/style/prism.css";
import "../assets/style/prism-coy.css";
import {
  computed,
  ref
} from "vue";

const Prism = (window as any).Prism;
export default {
  components: {
    Button
  },
  props: {
    component: Object
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, "html");
    });
    const showCode = () => codeVisible.value = true;
    const hideCode = () => codeVisible.value = false;
    const codeVisible = ref(true);
    return {
      Prism,
      html,
      codeVisible,
      showCode,
      hideCode
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h5 {
    position: relative;
    color: grey;
    background: white;
    margin-bottom: -10px;
    margin-left: 10px;
    width:fit-content;
    width: -moz-fit-content;
    padding:0 16px;
    //display:inline;
  }
  .description {
    color: grey;
    border-top: 1px dashed $border-color;
  }
  &-component {
    padding: 16px;
  }

  &-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
  }

  &-code {
    padding: 8px 16px;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      overflow: auto;
    }
  }
}
</style>