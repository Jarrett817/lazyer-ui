<template>
  <div>
    <Topnav/>
    <div class="layout">
      <Topnav class="nav" toggle-menu-button-visible/>
      <div class="content">
<!--        <div class="shade"></div>-->
        <AsideBar></AsideBar>
        <main>
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import AsideBar from "../components/AsideBar.vue";
import {
  inject,
  Ref
} from "vue";

export default {
  components: {
    Topnav, AsideBar
  },
  setup() {
    // const menuVisible = inject<Ref<boolean>>("menuVisible");
    // return {
    //   menuVisible,
    // };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  //.shade {
  //  width: 100vw;
  //  height: 100vh;
  //  background: rgba(0,0,0,0.4);
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //}

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

main {
  overflow: auto;
}
</style>
