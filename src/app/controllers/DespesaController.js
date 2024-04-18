import DespesaRepository from "../repository/DespesaRepository.js"
import CategoriaRepository from "../repository/CategoriaRepository.js"
import ModoPagamentoRepository from "../repository/ModoPagamentoRepositoy.js"

import Despesa from "../entites/Despesa.js"

class DespesaController {

    async store(req, res) {
        try {
            const { valor, descricao, data, idCategoria, idTipoPagamento } = req.body

            const categoriaExiste = await this.verificaCategoria(idCategoria)
            if(categoriaExiste != true){
              throw new Error("Categoria Não Encontrada")
            }
            
            const tipoPagamentoExiste = await this.verificaTipoPagamento(idTipoPagamento)
            if(tipoPagamentoExiste != true){
              throw new Error("Tipo Pagamento não encontrado")
            }
          
            const despesa = new Despesa(valor, descricao, data, categoriaExiste, tipoPagamentoExiste)
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

    async verificaCategoria(idCategoria){
      try {
          const id = parent(idCategoria)
          const categoria = await CategoriaRepository.findById(id);
          return categoria;
      } catch (error) {
          throw new Error("Erro ao verificar categoria: " + error.message);
      }
  }

    async verificaTipoPagamento(idTipoPagamento){
      try {
        const id = parent(idTipoPagamento)
        const tipoPagamento = await ModoPagamentoRepository.findById(id)
        return tipoPagamento
      } catch (error) {
        throw new Error("Erro ao verificar tipo pagamento: " + error.message)
      }
    }
}

//padrão Singleton
export default new DespesaController()
