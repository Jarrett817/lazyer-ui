<template>
  <div class="total-wrapper">
    <Topnav/>
    <div class="bannerAndFeatures">
      <div class="banner">
        <h1>Lazyer UI</h1>
        <h4>一个简单易用的UI框架</h4>
        <h4>功能精简实用，自定义选项丰富</h4>
        <h4>清新简约的设计，融汇各类风格</h4>
        <p class="actions">
          <a href="https://github.com/Jarrett817/lazyer-ui" target="_blank">GitHub</a>
          <router-link to="/doc/">Start</router-link>
        </p>
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
::v-deep(.topNav) {
  background: rgba(0, 0, 0, 0);
}

.total-wrapper {
  height: 100vh;
  $blue: #27bbd7;
  $white: #f6f7fb;
  background: rgb(39, 187, 215);
  background: linear-gradient(145deg, rgba(39, 187, 215, 1) 50%,
      rgba(246, 247, 251, 1) 50%);
  color: #4c4d5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.bannerAndFeatures {
  width: 80%;
  border-radius: 10px;
  background: #f6f7fb;
  box-shadow: 0 0 50px -20px #27bbd7;
  position: relative;
  z-index: 1;
  @media (max-width: 500px) {
    max-height: 70%;
  }

  &::before, &::after {
    content: '';
    display: block;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    border-radius: 8px;
    z-index: -1;
  }

  &::before {
    width: 88%;
    background: rgba(246, 247, 251, 0.4);
    margin-top: -40px;
  }

  &::after {
    width: 94%;
    position: absolute;
    background: rgba(246, 247, 251, 0.6);
    margin-top: -20px;
    top: 0;
  }

  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(max-width: 500px) {
      & {
        padding: 10px 0;
      }
    }

    > h4 {
      color: grey;
    }

    > h1 {
      padding-bottom: 2px;
    }

    > .actions {
      padding-top:16px;

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

  .features {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 64px;
    @media(max-width: 500px) {
      & {
        justify-content: flex-start;
        margin-bottom: 32px;
      }
    }

    > li {
      margin: 16px 16px;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
     "icon title"
     "icon text";
      grid-template-columns: 60px auto;
      grid-auto-rows: 1fr auto;

      h3 {
        grid-area: title;
      }

      p {
        grid-area: text;
      }

      > svg {
        grid-area: icon;
        width: 48px;
        height: 48px;
      }
    }
  }
}


</style>
