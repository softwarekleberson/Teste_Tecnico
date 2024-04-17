import DespesaRepository from "../repository/DespesaRepository.js"
import Despesa from "../entites/Despesa.js"

class DespesaController {

    async store(req, res) {
        try {
            const { valor, descricao, data } = req.body
            const despesa = new Despesa(valor, descricao, data)
            await DespesaRepository.create(despesa)
            const sucess = true
            res.status(201).json({data, sucess}) 
        } catch (error) {
            const data = req.body.data
            const sucess = false
            res.status(400).json({data, sucess})
        }
    }

    async index(req, res) {
        try {
          const rows = await DespesaRepository.findAll()
          const despesas = rows.map(row => {
            return {
                id: row.id,
                valor: row.valor,
                descricao: row.descricao,
                data: row.data
            }
          })

          res.json(despesas)
        } catch (error) {
          res.status(500).json({ error: error.message })
        }
    }
}

//padrão Singleton
export default new DespesaController()
