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

    findById(id) {
        const sql = "SELECT * FROM despesa WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if (erro) return reject('Não foi possível localizar')

                const rows = JSON.parse(JSON.stringify(resultado))
                return resolve(rows)
            })
        })
    }

    update(despesa, id) {
        const sql = "UPDATE despesa SET ? WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [despesa, id], (erro, resultado) => {
                if (erro) return reject('Não foi possível atualizar')
                const rows = JSON.parse(JSON.stringify(resultado))
                return resolve(rows)
            })
        })
    }

    delete(id) {
        const sql = "DELETE FROM despesa WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if (erro) return reject('Não foi possível apagar')

                const rows = JSON.parse(JSON.stringify(resultado))
                return resolve(rows)
            })
        })
    }
}

export default new DespesaRepository()