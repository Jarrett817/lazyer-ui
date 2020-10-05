## 开始使用
请先[安装](#/doc/install)本组件库。

导入库文件

```
import {Button, Tabs, Switch, Dialog} from "lazyer-ui"
```

就可以使用我提供的组件了。

[点击查看测试样例](https://jarrett817.github.io/lazyer-ui-test-preview/)

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "king-ui"
export default {
  components: {Button}
}
</script>
```