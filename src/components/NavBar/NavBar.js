import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

//Components
import SignIn from "./SignIn";

const styles = () => ({
  navbar: {
    // backgroundColor: "#0F7DC2",
    backgroundColor: "#ececec",
    height: "50px",
    /*TODO: Not getting applied */
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    letterSpacing: "1.2px",
    textTransform: "uppercase"
  }
});

class Navbar extends React.Component {
  // state = {
  //   navBackground: "white"
  // };
  // componentDidMount() {
  //   document.addEventListener("scroll", () => {
  //     const backgroundcolor = window.scrollY < 100 ? "red" : "blue";

  //     this.setState({ navBackground: backgroundcolor });
  //   });
  // }
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.navbar}>
        <NavLink
          exact
          activeClassName="active"
          style={{ color: "#3672c0", textDecoration: "none", fontWeight: "bolder" }}
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          style={{ color: "#3672c0", textDecoration: "none", fontWeight: "bolder" }}
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          style={{ color: "#3672c0", textDecoration: "none", fontWeight: "bolder" }}
          to="/features"
        >
          Features
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          style={{ color: "#3672c0", textDecoration: "none", fontWeight: "bolder" }}
          to="/faqs"
        >
          FAQ's
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          style={{ color: "#3672c0", textDecoration: "none", fontWeight: "bolder" }}
          to="/tests"
        >
          TEST
        </NavLink>

        <SignIn />
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
