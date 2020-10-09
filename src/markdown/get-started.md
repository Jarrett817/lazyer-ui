## 开始使用
请先[安装](#/doc/install)本组件库。

导入库文件

```
import {LazyerButton, LazyerTabs, LazyerTabsItem, LazyerSwitch, LazyerDialog, openDialog, LazyerDropdown, LazyerMenuItem} from "lazyer-ui-1"
```

可按需引入。

[点击查看测试样例](https://jarrett817.github.io/lazyer-ui-test-preview/)

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <LazyerButton>按钮</LazyerButton>
  </div>
</template>
<script>
import {LazyerButton} from "lazyer-ui-1"
export default {
  components: {LazyerButton}
}
</script>
```