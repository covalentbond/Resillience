import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
// import withStyles from "@material-ui/core/styles/withStyles";
// import PropTypes from "prop-types";
// import axios from "axios";

//Components
// import Counselling from "./Counselling";
import SignIn from "./SignIn";

const styles = () => ({
  navbar: {
    // backgroundColor: "#0F7DC2",
    backgroundColor: "white",
    // position: "fixed",
    height: "45px",
    /*TODO: Not getting applied */
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
  // navbarRight: {
  //   justifyContent: "flex-end",
  //   display: "flex"
  // }
});

function Navbar(props) {
  const { classes } = props;
  return (
    <AppBar className={classes.navbar}>
      {/* <Link to="/">RESILLIENCE</Link> */}
      {/* <div className={classes.navbarRight}> */}
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/features">Features</Link>
      <Link to="/blogs">Blogs</Link>
      {/* <Counselling /> */}
      <Link to="/career">Career</Link>
      <Link to="/tests">Tests</Link>
      {/* <SignIn /> */}
      {/* </div> */}
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
