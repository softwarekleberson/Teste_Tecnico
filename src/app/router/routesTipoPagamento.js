import { Router } from "express";
import ModoPagamentoController from "../controllers/ModoPagamentoController.js";

const routerTipo = Router()

//Rota TipoPagamento
routerTipo.get('/api/tipo', ModoPagamentoController.index)
routerTipo.post('/api/tipo', ModoPagamentoController.store)

export default routerTipo