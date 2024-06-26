import DespesaRepository from "../repository/DespesaRepository.js"
import CategoriaRepository from "../repository/CategoriaRepository.js"
import ModoPagamentoRepository from "../repository/ModoPagamentoRepositoy.js"

import Despesa from "../entites/Despesa.js"

class DespesaController {

  async store(req, res) {
    try {
        const { valor, descricao, data, tipo, categoria } = req.body

        const categoria_id = parseInt(categoria)
        const tipo_id = parseInt(tipo)

        const categoriaExiste = await this.verificaCategoria(categoria_id)
        if (!categoriaExiste) {
            throw new Error("Categoria Não Encontrada")
        }

        const tipoPagamentoExiste = await this.verificaTipoPagamento(tipo_id)
        if (!tipoPagamentoExiste) {
            throw new Error("Tipo Pagamento não encontrado")
        }

        const despesa = new Despesa(valor, descricao, data, tipo_id ,categoria_id)
        console.log(despesa)
        await DespesaRepository.create(despesa)

        const success = true
        res.status(201).json({ data, success })

    } catch (error) {
        const data = req.body.data
        const success = false
        console.log(error)
        res.status(400).json({data, success})
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
                data: row.data,
                categoria: row.categoria_id,
                tipo: row.tipo_id
            }
          })

          res.json(despesas)
        } catch (error) {
          res.status(500).json({ error: error.message })
        }
    }

    async verificaCategoria(idCategoria){
      try {
          const id = parseInt(idCategoria)
          const categoria_id = await CategoriaRepository.findById(id);
          return categoria_id;
      } catch (error) {
          throw new Error("Erro ao verificar categoria: " + error.message);
      }
  }

    async verificaTipoPagamento(idTipoPagamento){
      try {
        const id = parseInt(idTipoPagamento)
        const tipo_id = await ModoPagamentoRepository.findById(id)
        return tipo_id
      } catch (error) {
        throw new Error("Erro ao verificar tipo pagamento: " + error.message)
      }
    }
}

//padrão Singleton
export default new DespesaController()
