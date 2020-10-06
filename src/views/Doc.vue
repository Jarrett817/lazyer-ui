<template>
  <div>
    <Topnav/>
    <div class="layout">
      <Topnav class="nav" toggle-menu-button-visible/>
      <div class="content">
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

export default {
  components: {
    Topnav, AsideBar
  },
  setup() {
  },
};
</script>

<style lang="scss" scoped>
::v-deep .menu{
  color:white;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

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
