import React from "react";
import "./aboutSection.css";
import MetaData from "../MetaData";

const About = () => {
  return (
    <div className="aboutSection">
      <MetaData
        title="About Us -- Developer"
        description="About Developer | Sunidhi Jain"
      />
      <div className="aboutSectionContainer">
        <h1>Sunidhi Jain</h1>

        <p>
          I'm a <span> FULL STACK DEVELOPER </span> and this is just a sample
          website project. This can be used to shop grocery items like fruits,
          vegetables, snacks, beverages, etc.
          <br />
          <br />
          Built by using MERN Stack in backend and React-Redux in frontend..
          <br />
        </p>
        <span> Copyrights 2023 &copy; SunidhiJain</span>
      </div>
    </div>
  );
};

export default About;
