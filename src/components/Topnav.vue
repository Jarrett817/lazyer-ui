<template>
  <div class="topNav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-plane"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <svg
        v-if="toggleMenuButtonVisible"
        class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-caidan"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {
  Ref,
  inject
} from "vue";

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }

  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };

    return {
      toggleMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.topNav {
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  background: rgb(39,187,215);


  & .logo {
    max-width: 8em;
    margin-right: auto;
    font-size: 2em;
    color:white;
  }

  & .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > * {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    width: 28px;
    height: 28px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }

    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
