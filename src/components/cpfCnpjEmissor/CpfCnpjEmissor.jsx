import React from "react";
import './cpfCnpjEmissor.css';

class CpfCnpjEmissor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="cpfCnpjEmissor">
                <h2>CPF ou CNPJ (opicional):</h2>
                <input type="text"  name="cpfCnpjEmissor" id="cpfCnpjEmissor" autofocus="true" /><br/>
                <p>Somente números</p>
            </div>
        );
    }
}
export default CpfCnpjEmissor;