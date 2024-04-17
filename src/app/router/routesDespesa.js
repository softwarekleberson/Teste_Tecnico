import { Router } from "express";
import DespesaController from "../controllers/DespesaController.js";

const router = Router()

//Rota despesa
router.post('/api/despesa', DespesaController.store)
router.get('/api/despesa', DespesaController.index)

export default router