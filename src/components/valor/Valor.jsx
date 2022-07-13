import React from "react";
import './valor.css';

class Valor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="valor">
                <h2>Valor:</h2>
                <input type="number" class="input_valor" name="valor" id="valor" autofocus="true" placeholder="00,00" required /><br/>
                <p>Valor Recebido</p>
            </div>
        );
    }
}
export default Valor;