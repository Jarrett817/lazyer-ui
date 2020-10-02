import {createWebHashHistory, createRouter} from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/demos/Switch/SwitchDemo.vue";
import ButtonDemo from "./components/demos/button/ButtonDemo.vue";
import DialogDemo from "./components/demos/dialog/DialogDemo.vue";
import TabsDemo from "./components/demos/tabs/TabsDemo.vue";
import {h} from "vue";
import Markdown from "./components/MarkDown.vue";

import intro from "./markdown/intro.md"
import getStarted from './markdown/get-started.md'
import install from "./markdown/install.md"
const history = createWebHashHistory();
//手动渲染Markdown组件
const md = string => h(Markdown, {content: string, key: string })
export const router = createRouter(
    {
        history: history,
        routes: [
            {path: "/", component: Home},
            {
                path: "/doc", component: Doc, children: [
                    {path: "", redirect: '/doc/intro'},
                    {path: "intro", component: md(intro)},
                    {path: "get-started", component: md(getStarted)},
                    {path: "install", component: md(install)},
                    {path: "Switch", component: SwitchDemo},
                    {path: "Button", component: ButtonDemo},
                    {path: "Dialog", component: DialogDemo},
                    {path: "Tabs", component: TabsDemo}
                ]
            }
        ]
    }
);