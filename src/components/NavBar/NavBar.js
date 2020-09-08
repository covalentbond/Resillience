import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
// import logo from "../../images/Resillience-Logo.png";
// import logoSmall from "../../images/Resillience-Logo-Small.svg";
// import ResillienceNavbar from "../../images/RESILLIENCE-NAVBAR.svg";

import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

//Components
import SignIn from "./SignIn";

const styles = () => ({
  hamburgerMenu: {
    "@media only screen and (min-width: 770px)": {
      display: "none"
    }
  },
  smallNavbar: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "20%",
    alignItems: "center",
    "@media only screen and (max-width: 770px)": {
      marginRight: "2%"
    }
  },
  resillience: {
    textTransform: "capitalize",
    fontFamily: "rubik",
    fontSize: "26px",
    "@media only screen and (max-width: 770px)": {
      paddingLeft: "5%",
      marginTop: "8.5px",
      marginBottom: "8.5px"
    }
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ececec",
    height: "55px",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    color: "#3672c0",
    "@media only screen and (max-width: 770px)": {
      flexDirection: "column",
      paddingLeft: "0",
      textTransform: "capitalize",
      alignItems: "initial",
      height: "auto"
    }
  },
  navLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "@media only screen and (max-width: 770px)": {
      flexDirection: "column",
      justifyContent: "start",
      height: "auto",
      backgroundColor: "#ececec",
      alignItems: "start",
      padding: "10px 20px 16px",
      fontSize: "18px",
      boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
    }
  },
  vanish: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "@media only screen and (max-width: 770px)": {
      display: "none"
    }
  },
  navIcons: {
    color: "#3672c0",
    textDecoration: "none",
    fontWeight: "bolder",
    "@media only screen and (max-width: 770px)": {
      color: "#232127",
      fontFamily: "muli",
      fontWeight: "normal",
      padding: "11px 0px"
    }
  }
});

class Navbar extends React.Component {
  state = {
    open: false
  };
  handleChange = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.navbar}>
        <div className={classes.smallNavbar}>
          <h1 className={classes.resillience}>RESILLIENCE</h1>
          {this.state.open === true ? <CloseIcon onClick={this.handleChange} className={classes.hamburgerMenu} /> : <MenuIcon onClick={this.handleChange} className={classes.hamburgerMenu} />}
        </div>

        <div className={this.state.open === true ? classes.navLinks : classes.vanish}>
          {[
            { route: "/", name: "Home", id: 1 },
            { route: "/about-us", name: "About Us", id: 2 },
            { route: "/features", name: "Features", id: 3 },
            { route: "/faqs", name: "FAQ'S", id: 4 },
            { route: "/test", name: "Test", id: 5 }
          ].map((eachNav) => (
            <NavLink key={eachNav.id} exact className={classes.navIcons} activeClassName="active" to={eachNav.route} onClick={this.handleChange}>
              {eachNav.name}
            </NavLink>
          ))}

          <SignIn />
        </div>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
