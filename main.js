// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'  // 导入 Pinia
import App from './App.vue'
import uviewPlus from 'uview-plus'

export function createApp() {
  const app = createSSRApp(App)
  
  // 创建 Pinia 实例
  const pinia = createPinia()
  
  // 使用 Pinia
  app.use(pinia)
  
  // 使用 uviewPlus 插件
  app.use(uviewPlus)

  return {
    app
  }
}
// #endif
