import React from "react";
import './telefone.css';


class Telefone extends React.Component {


    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div class="telefone">
                <div>
                    <h2>Telefone (opicional): </h2>
                    <input type="text" name="telefone" id="telefone" keyboardType="numeric" />
                    <br />
                </div>
            </div>
        );
    }
}
export default Telefone;