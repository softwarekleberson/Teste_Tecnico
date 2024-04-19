import ModoPagamentoRepository from "../repository/ModoPagamentoRepositoy.js"
import TipoPagamento from "../entites/TipoPagamento.js"

class ModoPagamentoController {

  async store(req, res) {
    try {
      const { tipo } = req.body;
      const tipoPagamento = new TipoPagamento(tipo);
      await ModoPagamentoRepository.create(tipoPagamento);

      const data = new Date();
      const success = true;
      res.status(201).json({data, success});

    } catch (error) {
      const data = new Date();
      const success = false;
      res.status(400).json({data, success});
    }
  }

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