import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Aplication</h1>
      <Link to="/about">About</Link>
    </div>
  );
};
