import CategoriaRepository from "../repository/CategoriaRepository.js"
import Categoria from "../entites/Categoria.js"

class CategoriaController {

    async store(req, res){
        try {
            const {nome} = req.body
            const categoria = new Categoria(nome)

            const novaCategoria = await CategoriaRepository.create(categoria)

            const data = new Date()
            const sucess = true
            res.status(201).json({data, sucess})

        } catch (error) {
            const data = new Date()
            const sucess = false
            res.status(400).json({data, sucess})
        }
    }

    async index(req, res) {
        try {
          const rows = await CategoriaRepository.findAll()
          const categorias = rows.map(row => {
            return {
                id: row.id,
                nome: row.nome,
            }
          })

          res.json(categorias)
        } catch (error) {
          res.status(500).json({ error: error.message })
        }
    }
}

export default new CategoriaController()
