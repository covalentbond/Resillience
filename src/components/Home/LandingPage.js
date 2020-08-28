import React from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import logo from "../../images/Resillience-Logo.png";
import HomePageWeb from "../../images/NewHomeFinalFinall.svg";
import HomePagePhone from "../../images/homePhone.svg";
import rectangle from "../../images/Rectangle.png";
import Counselling from "../../components/Navbar/Counselling";

const styles = () => ({
  homeImageWeb: {
    height: "110vh",
    marginLeft: "42.6%",
    "@media only screen and (max-width: 767px)": {
      display: "none"
    }
  },
  homeImagePhone: {
    width: "100%",
    "@media only screen and (min-width: 767px)": {
      display: "none"
    }
  },
  p20: {
    marginLeft: "20px"
  },

  logoImage: {
    height: "100px",
    width: "100px",
    top: "20px",
    left: "20px",
    position: "absolute"
  },

  personalized: {
    fontFamily: "Rubik,sans-serif",
    fontSize: "500%",
    color: "#0F7DC2",
    top: "100px",
    position: "absolute"
  },

  learning: {
    position: "absolute",
    fontSize: "64px",
    fontFamily: "muli, sans-serif",
    top: "200px"
  },

  iitians: {
    display: "flex",
    justifyContent: "space-between",
    top: "330px",
    width: "20%",
    position: "absolute",
    fontFamily: "muli, sans-serif"
  },

  firstLine: {
    fontSize: "1.55rem",
    position: "absolute",
    top: "370px"
  },

  secondLine: {
    display: "flex"
    /* flex-direction: "row", */
    /* font-size: 1.55rem, */
    /* position: absolute, */
    /* top: 400px, */
  },
  content: {
    "@media only screen and (max-width: 767px)": {
      display: "none"
    }
  }
});

function LandingPage(props) {
  const { classes } = props;
  return (
    <div style={{ position: "relative", marginTop: "40px" }}>
      <img
        className={classes.homeImageWeb}
        src={HomePageWeb}
        alt="Home Page Main"
        style={{ position: "relative", right: "0" }}
      />
      <img
        className={classes.homeImagePhone}
        src={HomePagePhone}
        alt="Home Page Main"
      />
      <div className={(classes.content, classes.p20)}>
        <img src={logo} className={classes.logoImage} alt="Logo" />
        <h1 className={(classes.personalized, classes.p20)}>Personalized</h1>
        <h2 className={(classes.learning, classes.p20)}>
          learning with{" "}
          <span>
            <img
              alt="Bg Design"
              src={rectangle}
              style={{
                zIndex: "-1",
                marginTop: "38px",
                marginLeft: "4px",
                position: "absolute"
              }}
            />
            IITians
          </span>
        </h2>
        <div>
          <div className={(classes.iitians, classes.p20)} style={{ width: "40%" }}>
            <h1>IIT</h1>
            <h1>NEET</h1>
            <h1>
              Foundation (8<sup>th</sup> 9<sup>th</sup> 10<sup>th</sup>)
            </h1>
          </div>
        </div>
        <div className={(classes.firstLine, classes.p20)}>
          <p style={{ marginBottom: "0" }}>Book a free demo</p>
          <div
            className={classes.secondLine}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <p>cum </p>
            <Counselling />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(LandingPage);
