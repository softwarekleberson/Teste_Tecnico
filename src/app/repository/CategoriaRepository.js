import conexao from "../database/conexao.js";

class CategoriaRepository {
    
    create(categoria){
        const sql = "INSERT INTO categoria SET ?"

        return new Promise((resolve, reject) => {
            conexao.query(sql, categoria, (erro, resultado) => {
                if(erro) return reject
                ('Não foi possível cadastrar')

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

    findById(idCategoria) {
        const sql = "SELECT * FROM categoria WHERE id = ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, [idCategoria], (erro, resultado) => { 
                if (erro) {
                    return reject(new Error('Não foi possível localizar a categoria: ' + erro.message));
                }
                
                const rows = JSON.parse(JSON.stringify(resultado))

                return resolve(rows);
            });
        });
    }
}

export default new CategoriaRepository()
