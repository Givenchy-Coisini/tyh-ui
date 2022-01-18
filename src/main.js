import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import tyhUi2 from './components/tyhUi'
import './components/tyhUi/style/index.css'

// import tyhUi2 from 'tyh-ui2'
// import 'tyh-ui2/style/index.css'

import El3 from 'element3'
// import { ElSwitch } from 'element3'
import 'element3/lib/theme-chalk/index.css'
// import microtip from 'microtip/microtip.css'
import './style/microtip.css'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import naive from 'naive-ui'

createApp(App)
  .use(router)
  .use(El3)
  .use(tyhUi2)
  .use(naive)
  // .use(microtip)
  .mount('#app')
