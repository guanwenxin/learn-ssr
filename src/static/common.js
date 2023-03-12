// 路由怎么办？
// 前端不管，后端管
// 后端怎么知道当前url匹配上那个vue组建了
// url->vue-router可以工作在后端
// 创建 vue ssr app
// 1. vue单文件无法编译，需要打包
// 2. 处于后端换进中的vue-router如何配合koa-router工作
// 3. 组件库样式如何处理
// 4. store等全局状态如何处理
// 5. 后端的接口问题（1.使用同一个后端2.在单开一个后端项目）
// xx.整体上看是一个后端项目
// 解决方案 nuxt.js
// 什么时候服务端渲染
// 1. 整个系统中大部分子页面都希望被浏览器收录（掘金）
// 2. 整个系统中，大部分的页面都不希望有白屏时间（临时访问某个子页面，后立即退出）
import { createSSRApp } from 'vue'
// 无论nodejs还是浏览器，都无法正常工作
import { App } from './App.vue'
// function getSSRApp() {
//     const app = createSSRApp({
//         data: () => ({ count: 1 }),
//         template: `<div id="app"><button @click="count++">{{ count }}</button></div>`
//     })
//     return app;
// }
function getSSRApp() {
    const app = createSSRApp(App)
    return app;
}
export default getSSRApp;