import express from 'express'
import routerDespesa from './app/router/routesDespesa.js'

const app = express()
app.use(express.json())

app.use(routerDespesa)

export default app
