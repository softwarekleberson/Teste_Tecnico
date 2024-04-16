import DespesaRepository from "../repository/DespesaRepository.js"
import Despesa from "../entites/Despesa.js"

class DespesaController {

    async store(req, res) {
        try {
            const { valor, descricao, data } = req.body
            const despesa = new Despesa(valor, descricao, data)
            const row = await DespesaRepository.create(despesa)
            res.status(201).json(row) 
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    async index(req, res) {
        try {
            const rows = await DespesaRepository.findAll()
            const despesas = rows.map(row => new Despesa(row.valor, row.descricao, row.data))
            res.json(despesas)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id
            const row = await DespesaRepository.findById(id)
            if (!row) {
                res.status(404).json({ error: "Despesa não encontrada" })
                return
            }

            const despesa = new Despesa(row.valor, row.descricao, row.data)
            res.json(despesa)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id
            const { valor, descricao, data } = req.body
            const despesa = new Despesa(valor, descricao, data)
            const row = await DespesaRepository.update(despesa, id)
            if (!row) {
                res.status(404).json({ error: "Despesa não achada" }) 
                return
            }
            res.json(row)
        } catch (error) {
            res.status(400).json({ error: error.message }) 
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id
            const row = await DespesaRepository.delete(id)
            if (!row) {
                res.status(404).json({ error: "Despesa não achada" })
                return
            }
            res.status(204).send()
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

//padrão Singleton
export default new DespesaController()
