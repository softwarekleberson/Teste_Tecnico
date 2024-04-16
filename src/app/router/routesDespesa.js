import { Router } from "express";
import DespesaController from "../controllers/DespesaController.js";

const router = Router()

//Rota despesa
router.post('/despesa', DespesaController.store)
router.get('/despesa', DespesaController.index)
router.get('/despesa/:id', DespesaController.show)
router.put('/despesa/:id', DespesaController.update)
router.delete('/despesa/:id', DespesaController.delete)

export default router