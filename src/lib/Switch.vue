<template>
<button @click="toggle" :class="{checked:value}">
    <span></span>
    <div></div>
</button>
</template>

<script>
import {
    ref
} from "vue";
export default {
    props: {
        value: Boolean,
    },
    setup(props, context) {
        const toggle = () => {
            // 上下文对象添加input事件，传值可在子组件中用$event获取
            context.emit("update:value", !props.value);
        };
        return {
            toggle,
        };
    },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h/2;
    transition: all 250ms;
}

button.checked {
    background: #1890ff;
}

button.checked>span {
    left: calc(100% - #{$h2} - 2px);
}

button:active {
    >span {
        width: $h2 + 4px;
    }
}

button.checked:active {
    >span {
        width: $h2 + 4px;
        margin-left: -4px;
    }
}

// 去除按钮周边的线
button:focus {
    outline: none;
}
</style>
