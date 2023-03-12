import { createSSRApp } from 'vue'

const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: '<div id="app"><button @click="count++">{{ count }}</button></div>'
})

app.mount('#app')