export default class TipoPagamento {
    constructor(tipo){
        const tipoPagamentoValido = ['debito', 'credito', 'pix', 'dinheiro']

        if(!tipoPagamentoValido.includes(tipo)){
            throw new Error('Tipo de pagamento inválido');
        }
        this.tipo = tipo;
    }
}

