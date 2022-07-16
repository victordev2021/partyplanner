import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
};
