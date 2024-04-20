import conexao from "../database/conexao.js";

class ModoPagamento {

    create(tipo){
        const sql = "INSERT INTO tipo SET ?"

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
    
    findById(idTipoPagamento) {
        const sql = "SELECT * FROM tipo WHERE id = ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, [idTipoPagamento], (erro, resultado) => { 
                if (erro) {
                    return reject(new Error('Não foi possível localizar tipo pagamento: ' + erro.message));
                }
                
                const rows = JSON.parse(JSON.stringify(resultado))

                return resolve(rows);
            });
        });
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