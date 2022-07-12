import React from "react";
import './cpfCnpj.css';

class CpfCnpj extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="cpfCnpj">
                <h2>CPF ou CNPJ (opicional):</h2>
                <input type="text"  name="cpfCnpj" id="cpfCnpj" autofocus="true" /><br/>
                <p>Somente números</p>
            </div>
        );
    }
}
export default CpfCnpj;