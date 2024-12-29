import React from "react";
import "./Contact.css";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <div className="contactContainer">
      <MetaData
        title="Contact Us"
        description="Get in touch with Sunidhi Jain via Email, GitHub, or LinkedIn."
      />
      <div className="contactContent">
    
        <p>I'd love to hear from you! Connect with me on these platforms or drop me an email.</p>
        <div className="contactLinks">
          <a href="https://github.com/SUNIDHI-JAIN125" target="_blank" rel="noopener noreferrer">
            <button className="githubButton">GitHub</button>
          </a>
          <a href="https://www.linkedin.com/in/sunidhi-jain-b71866284" target="_blank" rel="noopener noreferrer">
            <button className="linkedinButton">LinkedIn</button>
          </a>
        </div>
        <div className="contactEmail">
          <p>
            Email:{" "}
            <a href="mailto:sunidhijain0403@gmail.com" className="emailLink">
              sunidhijain0403@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
