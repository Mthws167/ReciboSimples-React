import React from "react";
import './nome-emissor.css';

class NomeEmissor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="nome-emissor">
                <h2>Nome do Emissor:</h2>
                <input type="text" name="nome-emissor" class="input-nomeEmissor" id="nome-emissor" autofocus="true"required /><br/>
            </div>
        );
    }
}
export default NomeEmissor;