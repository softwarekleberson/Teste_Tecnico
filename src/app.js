import express from 'express'
import routerDespesa from './app/router/routesDespesa.js'
import routerCategoria from './app/router/routesCategoria.js'

const app = express()
app.use(express.json())

app.use(routerDespesa)
app.use(routerCategoria)

export default app
