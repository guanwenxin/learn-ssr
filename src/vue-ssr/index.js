import Koa from 'koa'
import KoaRouter from 'koa-router'
import { render } from './server.js'

const router = new KoaRouter()
const server = new Koa()


router.get('/', async (ctx) => {
    const html = await render()
    ctx.res.writeHead(200, '', {
        'content-type': 'text/html'
    })
    ctx.res.write(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vue-ssr</title>
    <script type="importmap">
    {
      "imports": {
        "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
      }
    }
  </script>
</head>

<body>
    ${html}
</body>
<script type="module">
import { createSSRApp } from 'vue'

// 必须和服务端创建的实例相同，否则vue客户端无法激活
const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: '<div id="app"><button @click="count++">{{ count }}</button></div>'
})

app.mount('#app')
</script>
</html>
    `)
})

server.use(router.routes()).use(router.allowedMethods())

server.listen(8080, () => console.log('启动了'))
