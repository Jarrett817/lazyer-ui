<template>
<!--<div :size="size">-->
<button class="banana-button" :class="classes" :disabled="disabled">
    <!-- <button v-bind="$attrs">-->
    <span v-if="loading" class="banana-loadingIndicator"></span>
    <!--插槽传值 -->
    <slot />
</button>
</template>

/*
默认所有属性绑定到根元素
可以使用inheritAttrs:false取消默认绑定
使用$attrs或者context.attrs获取所有属性
使用v-bind="$attrs"可以批量绑定属性
使用const{size,..rest}=context.attrs将拿到的属性分开，用到了es6剩余操作符
*/
/*
attr和props区别：
props要先声明props:{
    size:String
}
而attrs不用先声明
props不包含事件，attrs包含
在props中没有声明的属性，会跑到attrs里
props支持string以外的类型，attrs只有string
props需要
*/

<script lang="ts">
import {
    computed
} from "vue";
export default {
    // 防止定义在button外层元素
    inheritAttrs: false,
    props: {
        theme: {
            type: String,
            default: "button",
        },
        size: {
            type: String,
            default: "normal",
        },
        level: {
            type: String,
            default: "normal",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const {
            theme,
            size,
            level
        } = props;
        const classes = computed(() => {
            return {
                [`banana-theme-${theme}`]: theme,
                [`banana-size-${size}`]: size,
                [`banana-level-${level}`]: level,
            };
        });
        return {
            classes,
        };
    },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;

.banana-button {
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    &.banana-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $blue;

        &:hover,
        &:focus {
            color: lighten($blue, 10%);
        }
    }

    &.banana-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;

        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }

    &.banana-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }

    &.banana-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }

    &.banana-theme-button {
        &.banana-level-main {
            background: $blue;
            color: white;
            border-color: $blue;

            &:hover,
            &:focus {
                background: darken($blue, 10%);
                border-color: darken($blue, 10%);
            }
        }

        &.banana-level-danger {
            background: $red;
            border-color: $red;
            color: white;

            &:hover,
            &:focus {
                background: darken($red, 10%);
                border-color: darken($red, 10%);
            }
        }
    }

    &.banana-theme-link {
        &.banana-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }

    &.banana-theme-text {
        &.banana-level-main {
            color: $blue;

            &:hover,
            &:focus {
                color: darken($blue, 10%);
            }
        }

        &.banana-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }

    &.banana-theme-button {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;

            &:hover {
                border-color: $grey;
            }
        }
    }

    &.banana-theme-link,
    &.banana-theme-text {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
        }
    }

    >.banana-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $blue $blue $blue transparent;
        border-style: solid;
        border-width: 2px;
        animation: banana-spin 1s infinite linear;
    }
}

@keyframes banana-spin {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>
