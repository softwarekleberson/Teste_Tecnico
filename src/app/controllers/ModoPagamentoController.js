import ModoPagamentoRepository from "../repository/ModoPagamentoRepositoy.js"

class ModoPagamentoController {

    async index(req, res) {
        try {
          const rows = await ModoPagamentoRepository.findAll()
          const tipos = rows.map(row => {
            return {
                id: row.id,
                tipo: row.tipo,
            }
          })

          res.json(tipos)
        } catch (error) {
          res.status(500).json({ error: error.message })
        }
    }
}

export default new ModoPagamentoController()