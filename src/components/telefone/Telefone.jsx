import React from "react";
import './telefone.css';

class Telefone extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="telefone">
                <h2>Telefone (opicional): </h2>
                <input type="text" name="telefone" id="telefone" autofocus="true"/><br/>
            </div>
        );
    }
}
export default Telefone;