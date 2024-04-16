export default class TipoPagamento {
    constructor(pagamento){
        const tipoPagamentoValido = ['debito', 'credito', 'pix', 'dinheiro']

        if(!tipoPagamentoValido.includes(pagamento)){
            throw new Error('Tipo de pagamento inválido');
        }
        this.pagamento = pagamento;
    }
}

