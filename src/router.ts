import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDefault from './components/DocDefault.vue'

const history = createWebHashHistory()
export const router = createRouter(
    {
        history: history,
        routes: [
            { path: '/', component: Home },
            {
                path: '/doc', component: Doc, children: [
                    {path:'/',component:DocDefault},
                    { path: 'Switch', component: SwitchDemo },
                    { path: 'Button', component: ButtonDemo },
                    { path: 'Dialog', component: DialogDemo },
                    { path: 'Tabs', component: TabsDemo }

                ]
            }
        ]
    }
)