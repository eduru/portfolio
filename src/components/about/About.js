import React from "react";
import "./About.css";
import eduardoRuiz from "../../media/eduardoRuiz.jpeg";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3> Let me tell you something about me:</h3>
        <p>
          mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare
          lectus sit amet est placerat in egestas erat imperdiet sed euismod
          nisi porta lorem mollis aliquam ut porttitor leo
        </p>
      </div>
      <div className="about-img">
        <img src={eduardoRuiz} alt="Eduardo Ruiz" />
      </div>
    </div>
  );
};

export default About;
