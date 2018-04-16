const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-body-parser')
const app = new Koa()

const todos = []

const router = new Router()
router.get('*', async ctx => {
	ctx.body = todos
})

router.post('*', async ctx => {
	todos.push(ctx.request.body)

	ctx.body = todos
})

router.delete('*', async ctx => {
	const index = Number(ctx.request.body)
	todos.splice(index, 1)

	ctx.body = todos
})

app.use(bodyParser())
app.use(router.routes())

app.listen(9092)
