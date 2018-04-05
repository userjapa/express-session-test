const app = require('express')()

const middlewares = require('./config/middlewares')
const routes = require('./config/routes')

middlewares(app)
routes(app)

app.listen(8080, () => {
  console.log(`Listening at port 8080`)
})
