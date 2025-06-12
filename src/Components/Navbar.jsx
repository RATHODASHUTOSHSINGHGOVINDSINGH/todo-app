import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" flex items-center text-white gap-5 transition-colors font-semibold">
      <NavLink
        to="/"
        className={(isActive) => {
          isActive ? "text-red-500" : "";
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "text-red-500" : "")}
      >
        About
      </NavLink>
       
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "text-red-500" : "")}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
