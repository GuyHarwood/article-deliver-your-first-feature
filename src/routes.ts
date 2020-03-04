import * as Router from 'koa-router'

const router = new Router()

router.get('/', async (ctx) => {
  ctx.body = { message: 'Hello World!' }
})

export const routes = router.routes()
