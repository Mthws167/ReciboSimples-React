import React from "react";
import './nome_pagador.css';

class NomePagador extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="nome_pagador">
                <h2>Nome do Pagador:</h2>
                <input type="text" name="nome_pagador" class="input_nomePagador" id="nome_pagador" autofocus="true"required /><br/>
            </div>
        );
    }
}
export default NomePagador;