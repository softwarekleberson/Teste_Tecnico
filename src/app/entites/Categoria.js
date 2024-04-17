export default class Categoria {
    constructor(categoria){
        this.setCategoria(categoria)
    }

    setCategoria(categoria){
        if(!categoria || categoria.trim() === ''){
            throw new Error('Categoria não deve ser nula ou vazia')
        }
        this.categoria = categoria
    }

    getCategoria(){
        return this.categoria
    }
}