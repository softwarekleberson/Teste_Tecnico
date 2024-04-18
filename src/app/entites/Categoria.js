export default class Categoria {
    constructor(nome){
        this.setNome(nome)
    }

    setNome(nome){
        if(nome.trim() === '' || nome.length > 100){
            throw new Error('Categoria não deve ser nula ou possuir mais de 50 caracteres')
        }
        this.nome = nome
    }

    getNome(){
        return this.nome
    }
}