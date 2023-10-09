import React from "react";
import "./Contact.css";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <div className="contactContainer">
      <MetaData
        title="Contact-Page"
        description="Contact | Email | Github | LinkedIn"
      />
      <h3> Contact Info - </h3>
      <a href="https://github.com/SUNIDHI-JAIN125">
        {" "}
        <button>Github </button>{" "}
      </a>
      <a href="https://www.linkedin.com/in/sunidhi-jain-b71866284">
        {" "}
        <button>LinkedIn</button>{" "}
      </a>
      <p>Email: sunidhijain0403@gmail.com</p>
    </div>
  );
};

export default Contact;
