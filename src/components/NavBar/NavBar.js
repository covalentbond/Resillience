import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import logo from "../../images/Resillience-Logo.png";
import logoSmall from "../../images/Resillience-Logo-Small.svg";
import ResillienceNavbar from "../../images/RESILLIENCE-NAVBAR.svg";

import rectangleStroke from "../../images/rectangleStroke.svg";

import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

//Components
import SignIn from "./SignIn";

const styles = () => ({
  navbar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ececec",
    height: "50px",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    color: "#3672c0"
  },
  navLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // backgroundColor: "#0F7DC2",

    /*TODO: Not getting applied */

    "@media only screen and (max-width: 767px)": {
      fontSize: "8px"
    }
  }
});

class Navbar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.navbar}>
        <h1
          style={{
            textTransform: "capitalize",
            marginRight: "20%",
            fontFamily: "rubik",
            fontSize: "26px"
          }}
        >
          RESSILLIENCE
        </h1>
        {/* <img
          src={logoSmall}
          alt="Logo"
          style={{ height: "50px", marginRight: "25%" }}
        /> */}
        {/* <img
          src={ResillienceNavbar}
          alt="Logo"
          style={{ height: "50px", marginRight: "25%" }}
        /> */}
        <div className={classes.navLinks}>
          <NavLink
            exact
            activeClassName="active"
            style={{
              color: "#3672c0",
              textDecoration: "none",
              fontWeight: "bolder"
            }}
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            style={{
              color: "#3672c0",
              textDecoration: "none",
              fontWeight: "bolder"
            }}
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            style={{
              color: "#3672c0",
              textDecoration: "none",
              fontWeight: "bolder"
            }}
            to="/features"
          >
            Features
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            style={{
              color: "#3672c0",
              textDecoration: "none",
              fontWeight: "bolder"
            }}
            to="/faqs"
          >
            FAQ's
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            style={{
              color: "#3672c0",
              textDecoration: "none",
              fontWeight: "bolder"
            }}
            to="/tests"
          >
            TEST
          </NavLink>
          <SignIn />
        </div>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
