import React from "react";
import { Link } from "react-router-dom";
// import withStyles from "@material-ui/core/styles/withStyles";
// import PropTypes from "prop-types";
// import axios from "axios";

//Components
import Counselling from "./Counselling";
import SignIn from "./SignIn";

export default function Navbar() {
  return (
    <div className="navbar" style={{ height: "60px" }}>
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
