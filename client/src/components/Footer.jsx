import React from "react";
import Logo from "../images/logo.png";

const Footer = () => {
    return (
        <footer>
            <span>
                <img src={Logo} alt="logo" />
                <br/>
                웹서버프로그램
                <br/>
                <b>© 2023 </b>
            </span>
        </footer>
    );
};

export default Footer;