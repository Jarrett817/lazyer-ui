import {createWebHashHistory, createRouter} from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/demos/SwitchDemo.vue";
import ButtonDemo from "./components/demos/ButtonDemo.vue";
import DialogDemo from "./components/demos/DialogDemo.vue";
import TabsDemo from "./components/demos/TabsDemo.vue";
import DocDefault from "./components/DocDefault.vue";
import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
const history = createWebHashHistory();
export const router = createRouter(
    {
        history: history,
        routes: [
            {path: "/", component: Home},
            {
                path: "/doc", component: Doc, children: [
                    {path: "/", component: DocDefault},
                    {path: "intro", component: Intro},
                    {path:'get-started',component:GetStarted},
                    {path:'install',component:Install},
                    {path: "Switch", component: SwitchDemo},
                    {path: "Button", component: ButtonDemo},
                    {path: "Dialog", component: DialogDemo},
                    {path: "Tabs", component: TabsDemo}
                ]
            }
        ]
    }
);