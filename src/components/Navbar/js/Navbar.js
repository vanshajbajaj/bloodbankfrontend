import React from 'react';
import "./../css/Navbar.css";
import { Link } from 'react-router-dom';
import logo from "./../assets/png/logo-no-background.png";

const Navbar = () => {
    return (
        <>

            <div id="nbdiv">

                <div id="nbimgdiv">
                    <img src={logo}></img>
                </div>
                <div id="nblinksdiv">
                    <div className="nblink">
                        <Link to="/">HOME</Link>
                    </div>
                    <div className="nblink">
                        <Link to="/about">MY PROFILE</Link>
                    </div>
                    <div className="nblink">
                        <Link to="/login">LOGIN</Link>
                    </div>
                    <div className="nblink">
                        <Link to="/register">REGISTER</Link>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Navbar