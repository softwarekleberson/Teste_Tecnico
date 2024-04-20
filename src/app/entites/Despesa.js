export default class Despesa {
    constructor(valor, descricao, data, categoria_id, tipo_id){
        this.setValor(valor)
        this.setDescricao(descricao)
        this.setData(data)
        this.setCategoria(categoria_id)
        this.setTipoPagamento(tipo_id)
    }

    setValor(valor){
        if(valor <= 0 || isNaN(valor)){
            throw new Error('Valor da despesa deve ser maior que 0')
        }
        this.valor = valor
    }

    getValor(){
        return this.valor
    }

    setDescricao(descricao){
        if(descricao.trim() === '' || descricao.length > 100){
            throw new Error('Descrição não deve ser nula ou maior que 100 caracteres')
        }
        this.descricao = descricao
    }

    getDescricao(){
        return this.descricao
    }

    setData(data){
        const dataTransformada = new Date(data)
        if(!(dataTransformada instanceof Date)){
            throw new Error('Data deve ser um objeto Date')
        }
        this.data = dataTransformada
    }
    
    getData(){
        return this.data
    }

    setCategoria(categoria_id){
        this.categoria_id = categoria_id
    }

    getCategoria(){
        return this.categoria_id;
    }

    setTipoPagamento(tipo_id){
        this.tipo_id = tipo_id
    }

    getTipoPagamento(){
        return this.tipo_id
    }
}