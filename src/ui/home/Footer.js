import React, {Component} from 'react';
import logo from "../../public/image/logo.png"

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                {<img className = "logo2"src={logo} alt=""/>}
                ©2021 Second hand market. All Rights Reserved. 
            </footer>
        );
    }
}
export default Footer;