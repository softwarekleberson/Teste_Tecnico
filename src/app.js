import express from 'express'
import router from './app/router/routesDespesa.js'

const app = express()

//Indicar ao express que deve ler no formato json
app.use(express.json())

//usar o routers
app.use(router)

export default app
