import { Router } from "express";
import ModoPagamentoController from "../controllers/ModoPagamentoController.js";

const routerTipo = Router()

//Rota TipoPagamento
routerTipo.get('/api/tipo', ModoPagamentoController.index)

export default routerTipo