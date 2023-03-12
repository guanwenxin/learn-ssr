import { renderToString } from 'vue/server-renderer'

import getSSRApp from '../static/common.js'

const app = getSSRApp()

async function render() {
    return renderToString(app)
}

export { render }

// renderToString(app).then(html => console.log(html))