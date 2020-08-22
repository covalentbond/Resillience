import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
// import withStyles from "@material-ui/core/styles/withStyles";
// import PropTypes from "prop-types";
// import axios from "axios";

//Components
// import Counselling from "./Counselling";
import SignIn from "./SignIn";

const styles = () => ({
  navbar: {
    /* background-color: #0F7DC2; */
    backgroundColor: "white",
    height: "60px",
    /*TODO: Not getting applied */
    display: "flex"
  },
  navbarRight: {
    justifyContent: "flex-end",
    display: "flex"
  }
});

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.navbar}>
      <Link to="/">RESILLIENCE</Link>
      <div className={classes.navbarRight}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/features">Features</Link>
        <Link to="/blogs">Blogs</Link>
        {/* <Counselling /> */}
        <Link to="/career">Career</Link>
        <SignIn />
      </div>
    </div>
  );
}

export default withStyles(styles)(Navbar);
