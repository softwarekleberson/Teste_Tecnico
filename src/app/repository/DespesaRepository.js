import conexao from "../database/conexao.js"

class DespesaRepository {

    create(despesa) {
        const sql = "INSERT INTO despesa SET ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, despesa, (erro, resultado) => {
                if(erro) return reject('Não foi possível cadastrar')
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    findAll() {
        const sql = "SELECT * FROM despesa;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if (erro) return reject('Não foi possível localizar')

                const rows = JSON.parse(JSON.stringify(resultado))
                return resolve(rows)
            })
        })
    }
}

export default new DespesaRepository()