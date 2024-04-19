import conexao from "../database/conexao.js";

class ModoPagamento {

    create(tipo){
        const sql = "INSERT INTO tipo SET ?"
        console.log(tipo)

        return new Promise((resolve, reject) => {
            conexao.query(sql, tipo, (erro, resultado) => {
                if(erro) return reject
                ('Não foi possível cadastrar')

                const row = JSON.parse
                (JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }
    
    findAll(){
        const sql = "SELECT * FROM tipo;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if(erro) return reject('Não foi possível localizar')

                const rows = JSON.parse(JSON.stringify(resultado))
                return resolve(rows)
            })
        })
    }
}

export default new ModoPagamento()