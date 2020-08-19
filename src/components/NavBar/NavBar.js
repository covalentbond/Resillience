import React from "react";
import { Link } from "react-router-dom";

//Components
import Counselling from "./Counselling";
import SignIn from "./SignIn";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">RESILLIENCE</Link>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/features">Features</Link>
        <Link to="/blogs">Blogs</Link>
        <Counselling />
        <Link to="/career">Career</Link>
        <SignIn />
      </div>
    </div>
  );
}
