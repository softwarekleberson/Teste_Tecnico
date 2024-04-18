import express from 'express'
import routerDespesa from './app/router/routesDespesa.js'
import routerCategoria from './app/router/routesCategoria.js'
import routerTipo from './app/router/routesTipoPagamento.js'

const app = express()
app.use(express.json())

app.use(routerDespesa)
app.use(routerCategoria)
app.use(routerTipo)

export default app
