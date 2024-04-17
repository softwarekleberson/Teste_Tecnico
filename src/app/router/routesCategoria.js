import { Router } from "express";
import CategoriaController from "../controllers/CategoriaController.js";

const routerCategoria = Router()

//Rota despesa
routerCategoria.post('/api/categoria', CategoriaController.store)
routerCategoria.get('/api/categoria', CategoriaController.index)

export default routerCategoria