import React from "react";
import './cpfCnpjPagador.css';

class CpfCnpjPagador extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="cpfCnpjPagador">
                <h2>CPF ou CNPJ (opicional):</h2>
                <input type="text"  name="cpfCnpjPagador" id="cpfCnpjPagador" autofocus="true" /><br/>
                <p>Somente números</p>
            </div>
        );
    }
}
export default CpfCnpjPagador;