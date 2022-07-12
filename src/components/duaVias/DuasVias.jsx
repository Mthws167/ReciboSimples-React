import React from "react";
import './duasVias.css';

class DuasVias extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="DuasVias" class="duasVias">
                <h2>Duas vias?</h2>
                <div class="control">
                <label class="checkbox">
                    <input type="checkbox" name="duas-vias" id="duas-vias" />
                    Sim
                </label>
                </div>
            </div>

        );
    }
}
export default DuasVias;