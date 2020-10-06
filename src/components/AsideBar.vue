<template>
  <aside v-if="menuVisible">
    <h3><strong>文档</strong></h3>
    <ol>
      <li>
        <router-link to="/doc/intro">介绍</router-link>
      </li>
      <li>
        <router-link to="/doc/install">安装</router-link>
      </li>
      <li>
        <router-link to="/doc/get-started">开始使用</router-link>
      </li>
    </ol>
    <h3><strong>组件列表</strong></h3>
    <ol>
      <li>
        <router-link to="/doc/switch">Switch</router-link>
      </li>
      <li>
        <router-link to="/doc/button">Button</router-link>
      </li>
      <li>
        <router-link to="/doc/dialog">Dialog</router-link>
      </li>
      <li>
        <router-link to="/doc/tabs">Tabs</router-link>
      </li>
      <li>
        <router-link to="/doc/dropdown">Dropdown</router-link>
      </li>
    </ol>
  </aside>
</template>

<script lang="ts">

import {inject, Ref} from "vue";

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return {
      menuVisible,
    };
  }
};
</script>

<style lang="scss" scoped>

$green: #01b289;
aside {
  width: 150px;
  padding: 86px 16px 16px 16px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  box-shadow: .5px 0 .5px .5px rgba(0, 0, 0, 0.1);
  background: white;
  z-index: 2;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px 0;

      > a:hover {
        text-decoration: none;
        color: $green;

      }

      .router-link-active {
        color: $green;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }

}
</style>