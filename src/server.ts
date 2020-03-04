import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as json from 'koa-json'

import { config } from './config'
import { routes } from './routes'

const app = new Koa()

// Middleware
app.use(json())
app.use(logger())
app.use(routes)

// Routes
app.use(routes)

app.listen(config.port, () => {
  console.log(`http server listening at http://localhost:${config.port}`)
})
