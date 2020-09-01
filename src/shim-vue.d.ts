//typeScript无法理解.vue文件，这段代码用于告诉ts理解vue文件  
declare module '*.vue'{
    import {ComponentOptions} from 'vue'
    const componentOptions:ComponentOptions
    export default componentOptions
}