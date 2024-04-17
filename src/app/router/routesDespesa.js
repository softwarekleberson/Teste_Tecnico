import { Router } from "express";
import DespesaController from "../controllers/DespesaController.js";

const routerCategoria = Router()

//Rota despesa
routerCategoria.post('/api/despesa', DespesaController.store)
routerCategoria.get('/api/despesa', DespesaController.index)

export default routerCategoria