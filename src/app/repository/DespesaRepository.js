import conexao from "../database/conexao.js"

class DespesaRepository {

    create(despesa) {
        const sql = "INSERT INTO despesa SET ?"; 
        console.log(despesa);
        return new Promise((resolve, reject) => {
            conexao.query(sql, despesa, (erro, resultado) => { // Pass despesa directly
                if (erro) {
                    console.error("Erro ao cadastrar despesa:", erro);
                    return reject("Não foi possível cadastrar a despesa");
                }
                const row = JSON.parse(JSON.stringify(resultado));
                resolve(row);
            });
        });
    }
    
    findAll() {
        const primeiroDiaMesAtual = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        const ultimoDiaMesAtual = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
        const dataInicio = primeiroDiaMesAtual.toISOString().slice(0, 10);
        const dataFim = ultimoDiaMesAtual.toISOString().slice(0, 10);
    
        const sql = "SELECT * FROM despesa WHERE data BETWEEN ? AND ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, [dataInicio, dataFim], (erro, resultado) => {
                if (erro) return reject('Não foi possível localizar');
    
                const rows = JSON.parse(JSON.stringify(resultado));
                return resolve(rows);
            });
        });
    }
    
}

export default new DespesaRepository()