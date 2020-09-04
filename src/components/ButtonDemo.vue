<template>
<div>
    Button示例
</div>
<Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small" level="normal" disabled>你好</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    },
    setup() {
        const onClick = () => {
            console.log('hi')
        }
    }
}
</script>
