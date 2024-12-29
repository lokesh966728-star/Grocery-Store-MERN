import React from "react";
import "./aboutSection.css";
import MetaData from "../MetaData";

const About = () => {
  return (
    <div className="aboutSection">
      <MetaData
        title="About Us -- Developer"
        description="Learn more about the developer, Sunidhi Jain, and this project."
      />
      <div className="aboutSectionContainer">
        <h1>About the Developer</h1>

        <p>
          Hello! I am <span>Sunidhi Jain</span>, a passionate <span>Full Stack Developer</span>. 
          This project is a sample e-commerce platform designed to streamline your grocery shopping experience. 
          From fresh fruits and vegetables to snacks and beverages, it’s built to handle it all.
          <br />
          <br />
          This application is crafted using the <strong>MERN Stack</strong>, combining MongoDB, Express.js, React, and Node.js for a seamless backend and frontend integration.
        </p>

        <span>Copyright &copy; 2023 Sunidhi Jain. All rights reserved.</span>
      </div>
    </div>
  );
};

export default About;
