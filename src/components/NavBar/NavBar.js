import React from "react";
import { Link } from "react-router-dom";

//Components
import Counselling from "./Counselling";
import SignIn from "./SignIn";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">RESILLIENCE</Link>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blogs">Blogs</Link>
        <Counselling />
        <Link to="/career">Career</Link>
        <SignIn />
      </div>
    </div>
  );
}

export default NavBar;
