const Koa = require('koa')
const KoaRouter = require('koa-router')
const render = require('./render')
const path = require('path')

const router = new KoaRouter()
const server = new Koa()


router.get('/', (ctx) => {
    const html = render(path.join(__dirname, '../template/index.ejs'), {msg: '哈哈'})
    ctx.res.writeHead(200, '', {
        'content-type': 'text/html'
    })
    ctx.res.write(html)
})

server.use(router.routes()).use(router.allowedMethods())

server.listen(8080, () => console.log('启动了'))
