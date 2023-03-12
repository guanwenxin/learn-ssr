import Koa from 'koa'
import KoaRouter from 'koa-router'
import { render } from './server.js'
import koaStatic from 'koa-static'
import koaMount from 'koa-mount'
import path from 'path'

const router = new KoaRouter()
const server = new Koa()
// 第一种: esmodule中没有内置变量
console.log(process.cwd())
server.use(koaMount('/dist', koaStatic(path.join(process.cwd(), './src/static'))))


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
<script type="module" src="/dist/client.js">
</script>
</html>
    `)
})

server.use(router.routes()).use(router.allowedMethods())

server.listen(8080, () => console.log('启动了'))
