export default class Despesa {
    constructor(valor, descricao, data){
        this.setValor(valor)
        this.setDescricao(descricao)
        this.setData(data)
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
        if(!descricao || descricao.trim() === ''){
            throw new Error('Descrição não deve ser nula')
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
}