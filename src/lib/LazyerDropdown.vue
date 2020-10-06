<template>
  <div class="lazyer-total-wrapper">
    <header>
      <slot name="title"/>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiala"></use>
      </svg>
    </header>
    <main>
      <slot name="content"/>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  setup() {

  }
};
</script>

<style lang="scss" scoped>
@import './helper.scss';

.lazyer-total-wrapper {
  position: relative;

  &:active,&:hover {
    & main {
      padding: 10px;
      border: 1px solid lightgrey;
      height:auto;
    }
    & header{
      color: lighten($button-color-blue, 10%);
    }
  }
}

header {
  color: $button-color-blue;
  cursor: pointer;

  .icon {
    margin-left: 3px;
  }

}

main {
  width: fit-content;
  background: #ffffff;
  box-shadow: 2px 2px 3px #d9d9d9,
  -2px -2px 3px #ffffff;
  color: #9c9c9c;
  transition: height linear 250ms;
  position: absolute;
  cursor: pointer;
  border-radius: 4px;
  line-height: 32px;
  overflow: hidden;
  height:0;

}
</style>