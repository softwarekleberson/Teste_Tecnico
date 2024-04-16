export default class Categoria {
    constructor(categoria){
        this.setCategoria(categoria)
    }

    setCategoria(categoria){
        if(!nome || nome.trim() === ''){
            throw new Error('Categoria não deve ser nula ou vazia')
        }
        this.nome = categoria
    }

    getCategoria(){
        return this.categoria
    }
}