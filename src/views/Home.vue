<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>For UI</h1>
        <h2>一个简单易用的UI框架</h2>
        <p class="actions">
          <a>GitHub</a>
          <router-link to="/doc/">Start</router-link>
        </p>
      </div>
    </div>
    <ul class="features">
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue3</h3>
        <p>使用Vue3 Composition API</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>使用 TypeScript书写（非严格检查）</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-scss"></use>
        </svg>
        <h3>基于 Scss</h3>
        <p>使用 Scss 预处理器</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";

export default {
  components: {
    Topnav
  }
};
</script>

<style lang="scss" scoped>
.topnavAndBanner {

  background: rgb(216,235,248);
  background: linear-gradient(145deg, rgba(216,235,248,1) 0%, rgba(227,242,252,1) 100%);
   clip-path: ellipse(116% 60% at 14% 40%);
  color: #4c4d5f;
}

.features {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media(max-width: 500px){
    &{
      padding-left: 10px;

    }
  }
  > li {
    width: 400px;
    margin: 16px 0;
    display: grid;
    justify-content: start;
    align-content: space-between;
    grid-template-areas:
     "icon title"
     "icon text";
    grid-template-columns: 80px auto;
    grid-auto-rows: 1fr auto;

    h3 {
      grid-area: title;
    }

    p {
      grid-area:text ;
    }

    > svg {
      grid-area: icon;
      width: 64px;
      height: 64px;
    }
  }


}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: white;
      display: inline-block;
      border-radius: 8px;
      padding: 8px 24px;
      color: #01b289;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
