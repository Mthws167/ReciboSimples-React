import React from "react";
import './nome-pagador.css';

class NomePagador extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="nome_pagador">
                <h2>Nome do Pagador:</h2>
                <input type="text" name="nome-pagador" class="input-nomePagador" id="nome-pagador" autofocus="true"required /><br/>
            </div>
        );
    }
}
export default NomePagador;