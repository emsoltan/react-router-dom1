import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/logo.png";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <NavLink
          exact
          to="/"
          activeStyle={{
            backgroundColor: "#112A46",
            color: "#B1D7D1",
            borderRadius: "10px",
          }}
        >
        
            <img src={logo} alt="logo" className="logo" />
          
        </NavLink>
        <NavLink
          exact
          to="/home"
          activeStyle={{
            backgroundColor: "#112A46",
            color: "#B1D7D1",
            borderRadius: "10px",
          }}
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/about"
          activeStyle={{
            backgroundColor: "#112A46",
            color: "#B1D7D1",
            borderRadius: "10px",
          }}
        >
          <li>About</li>
        </NavLink>

        <NavLink
          to="/services"
          activeStyle={{
            backgroundColor: "#112A46",
            color: "#B1D7D1",
            borderRadius: "10px",
          }}
        >
          <li>Services</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
