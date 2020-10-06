<demo>状态等级</demo>
<template>
  <div>
    <div>
      <lazyer-button level="main">main</lazyer-button>
      <lazyer-button>default</lazyer-button>
      <lazyer-button level="danger">danger</lazyer-button>
    </div>
    <br/>
    <div>
      <lazyer-button theme="link" level="main">link-main</lazyer-button>
      <lazyer-button theme="link">link-default</lazyer-button>
      <lazyer-button theme="link" level="danger">link-danger</lazyer-button>
    </div>
    <br/>
    <div>
      <lazyer-button theme="text" level="main">text-main</lazyer-button>
      <lazyer-button theme="text">text-default</lazyer-button>
      <lazyer-button theme="text" level="danger">text-danger</lazyer-button>
    </div>
  </div>
</template>

<script lang="ts">
import {LazyerButton} from "../../../lib";
export default {
  components: {LazyerButton}
};
</script>

<style lang="scss" scoped>

</style>