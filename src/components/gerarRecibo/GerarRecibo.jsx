import React from "react";
import './gerarRecibo.css';

class GerarRecibo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="GerarRecibo" class="gerarRecibo">
                <head>
                    <script src="https://kit.fontawesome.com/5c632ebf55.js" crossorigin="anonymous"></script>
                </head>
                <label class="radio">
                    
                    <button type="submit" name="botao" class="Botao-GerarRecibo">
                    <i class="fa-regular fa-file-lines"></i>
                        <b class="b"> Gerar Recibo</b>
                    </button>
                </label>
            </div>

        );
    }
}
export default GerarRecibo;