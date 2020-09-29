import {createWebHashHistory, createRouter} from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/demos/SwitchDemo.vue";
import ButtonDemo from "./components/demos/ButtonDemo.vue";
import DialogDemo from "./components/demos/DialogDemo.vue";
import TabsDemo from "./components/demos/TabsDemo.vue";
import DocDefault from "./components/DocDefault.vue";
import {h} from "vue";
import Markdown from "./components/MarkDown.vue";

const history = createWebHashHistory();
//手动渲染Markdown组件
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
export const router = createRouter(
    {
        history: history,
        routes: [
            {path: "/", component: Home},
            {
                path: "/doc", component: Doc, children: [
                    {path: "/", component: DocDefault},
                    {path: "intro", component: md("intro")},
                    {path: "get-started", component: md("get-started")},
                    {path: "install", component: md("install")},
                    {path: "Switch", component: SwitchDemo},
                    {path: "Button", component: ButtonDemo},
                    {path: "Dialog", component: DialogDemo},
                    {path: "Tabs", component: TabsDemo}
                ]
            }
        ]
    }
);