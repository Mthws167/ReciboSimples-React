import React from "react";
import './formaPagamento.css';

class FormaPagamento extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="FormaPagamento" class="formaPagamento" >
                <h2>Forma de Pagamento:</h2>
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="pagamento" value="dinheiro" id="btn-pagamento-dinheiro"
                            onchange="menuPagamentoPix()" checked />
                        Dinheiro
                    </label>
                    <label class="radio">
                        <input type="radio" name="pagamento" value="pix" id="btn-pagamento-pix"
                            onchange="menuPagamentoPix()" />
                        Pix
                    </label>
                    <label class="radio">
                        <input type="radio" name="pagamento" value="cheque" id="btn-pagamento-cheque"
                            onchange="menuPagamentoPix()" />
                        Cheque
                    </label>
                    <label class="radio">
                        <input type="radio" name="pagamento" value="transferencia" id="btn-pagamento-transferencia-deposito"
                            onchange="menuPagamentoPix()" />
                        Transferência/Depósito
                    </label>
                    <label class="radio">
                        <input type="radio" name="pagamento" value="cartao" id="btn-pagamento-cartao"
                            onchange="menuPagamentoPix()" />
                        Cartão de Crédito/Débito
                    </label>
                </div>
            </div>

        );
    }
}
export default FormaPagamento;
