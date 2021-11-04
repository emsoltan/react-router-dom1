import React from 'react'
import about from "../../assets/about.jpg"
const About = () => {
    return (
      <div className="section-content">
        <h2 className="section-header">About</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          illo quasi quas exercitationem officia iusto natus, vitae reiciendis
          dolor perferendis! Vel voluptate officiis tempore. Exercitationem ex
          laudantium atque inventore itaque! Praesentium quod nihil eum nostrum
        <img src={about} alt="about"></img>
        </p>
      </div>
    );
}

export default About
