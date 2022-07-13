import React from "react";
import './cpfCnpjEmissor.css';

class CpfCnpjEmissor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="cpfCnpjEmissor">
                <div>
                    <h2>CPF ou CNPJ (opicional):</h2>
                    <input type="text" name="cpfCnpjEmissor" id="cpfCnpjEmissor" autofocus="true"  /><br />
                    <p>Somente números</p>
                </div>
            </div>
        );
    }
}
export default CpfCnpjEmissor;