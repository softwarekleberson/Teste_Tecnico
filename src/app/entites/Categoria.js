export default class Categoria {
    constructor(nome){
        this.setNome(nome)
    }

    setNome(nome){
        if(!nome || nome.trim() === ''){
            throw new Error('Categoria não deve ser nula ou vazia')
        }
        this.nome = nome
    }

    getNome(){
        return this.nome
    }
}