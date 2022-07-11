import React from "react";
import './header.css';

class Header extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Header">
                <h1>{this.props.nome}</h1>
            </div>
            
        );
    }
}
export default Header;