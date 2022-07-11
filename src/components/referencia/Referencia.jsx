import React from "react";
import './referencia.css';

class Referencia extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="referencia">
                <h2>Referente à:</h2>
                <input type="text" name="referencia" class="input_referencia" id="referencia" autofocus="true"required /><br/>
            </div>
        );
    }
}
export default Referencia;