import React from "react";
import hiker1 from "../../assets/hiker1.jpg";
import hiker2 from "../../assets/hiker2.jpg";
import hiker3 from "../../assets/hiker3.jpg";

const Services = () => {
  return (
    <div className="section-content">
      <h2 className="section-header">Services</h2>
      <p className="section-text">
        <ul>
          <li>
            <img src={hiker1} alt="hiker1"></img>
          </li>
          <li>
            <img src={hiker2} alt="hiker2"></img>
          </li>
          <li>
            <img src={hiker3} alt="hiker3"></img>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Services;
