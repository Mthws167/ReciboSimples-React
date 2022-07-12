import React from "react";
import './data.css';

class Data extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="data">
                <h2>Data:</h2>
                <input type="text" name="data" id="data" autofocus="true"required /><br/>
            </div>
        );
    }
}
export default Data;