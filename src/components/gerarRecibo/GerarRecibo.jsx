import React from "react";
import './gerarRecibo.css';

class GerarRecibo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="GerarRecibo" class="gerarRecibo">
                <label class="radio">
                    <button type="submit" name="botao" class="Botao-GerarRecibo">
                        <i class="fa-solid fa-check">
                        </i>
                        <b class="b"> Gerar Recibo</b>
                    </button>
                </label>
            </div>

        );
    }
}
export default GerarRecibo;