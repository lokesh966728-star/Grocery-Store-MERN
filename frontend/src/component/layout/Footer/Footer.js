import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>GROCERY STORE</h1>

        <p>Copyrights 2023 &copy; SunidhiJain</p>
      </div>

      <div className="rightFooter">
        <h4> Get In Touch </h4>
        <a href="https://github.com/SUNIDHI-JAIN125">Github </a>
        <a href="https://www.linkedin.com/in/sunidhi-jain-b71866284">
          LinkedIn
        </a>
        <p> Email - sunidhijain0403@gmail.com </p>
      </div>
    </footer>
  );
};

export default Footer;
