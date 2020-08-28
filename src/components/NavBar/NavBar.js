import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

//Components
import SignIn from "./SignIn";

const styles = () => ({
  navbar: {
    // backgroundColor: "#0F7DC2",
    backgroundColor: "white",
    height: "50px",
    /*TODO: Not getting applied */
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
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
        <Link
          style={{ color: "#3672c0", textDecoration: "none", fontWeight: "bolder" }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{ color: "#3672c0", textDecoration: "none", fontWeight: "bolder" }}
          to="/about"
        >
          About Us
        </Link>
        <Link
          style={{ color: "#3672c0", textDecoration: "none", fontWeight: "bolder" }}
          to="/features"
        >
          Features
        </Link>
        <Link
          style={{ color: "#3672c0", textDecoration: "none", fontWeight: "bolder" }}
          to="/faqs"
        >
          FAQ's
        </Link>

        <SignIn />
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
