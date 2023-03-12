import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `<div id="app"><button @click="count++">{{ count }}</button></div>`
})

async function render() {
    return renderToString(app)
}

export { render }

// renderToString(app).then(html => console.log(html))