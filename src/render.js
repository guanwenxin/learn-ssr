const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
function render(filePath, data) {
    const ejsStr = fs.readFileSync(filePath).toString('utf-8')
    const html = ejs.render(ejsStr, data);
    console.log(html)
    return html
}

module.exports = render
// TODO: vitest单测
// render(path.join(__dirname, '../template/index.ejs'), {msg: 'hello'})