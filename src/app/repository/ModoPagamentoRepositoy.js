import conexao from "../database/conexao.js";

class ModoPagamento {

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

    findById(idTipoPagamento) {
        const sql = "SELECT * FROM tipo WHERE id = ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, [idTipoPagamento], (erro, resultado) => { 
                if (erro) {
                    return reject(new Error('Não foi possível localizar o tipo de pagamento: ' + erro.message));
                }
    
                const rows = JSON.parse(JSON.stringify(resultado))

                return resolve(rows);
            });
        });
    }
}

export default new ModoPagamento()