import conexao from "../database/conexao.js";

class CategoriaRepository {
    
    create(categoria){
        const sql = "INSERT INTO categoria SET ?"

        return new Promise((resolve, reject) => {
            conexao.query(sql, categoria, (erro, resultado) => {
                if(erro) return reject
                ('Não foi possível cadsatrar')

                const row = JSON.parse
                (JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    findAll() {
        const sql = "SELECT * FROM categoria;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if (erro) return reject('Não foi possível localizar')

                const rows = JSON.parse(JSON.stringify(resultado))
                return resolve(rows)
            })
        })
    }
}

export default new CategoriaRepository()