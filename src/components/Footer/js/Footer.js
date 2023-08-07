import React from 'react';
import "./../css/Footer.css";
import logo from "./../assets/logo-no-background.png";

const Footer = () => {
  return (
    <>
      <div id="footermain">
        <div id="footerlogo">
          <img src={logo} id="footerlogoimg"></img>
        </div>
        <div id="footerlinks">
          <i class="flinks zmdi zmdi-facebook-box"></i>
          <i class="flinks zmdi zmdi-twitter"></i>
          <i class="flinks zmdi zmdi-linkedin-box"></i>
        </div>
        <div id="footerauth">
         <i class=" flinks zmdi zmdi-mood"></i> Made By Vanshaj Bajaj
        </div>
      </div>
    </>
  )
}

export default Footer;