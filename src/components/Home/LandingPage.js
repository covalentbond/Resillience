import React from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import logo from "../../images/Resillience-Logo.png";
// import HomePageWeb from "../../images/NewHomeFinalFinall.svg";
import HomePageWeb from "../../images/ravi.svg";
import HomePagePhone from "../../images/homePhone.svg";
import rectangle from "../../images/Rectangle.png";
import Counselling from "../../components/Navbar/Counselling";

const styles = () => ({
  homeImageWeb: {
    height: "110vh",
    marginLeft: "41.7%",
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
  content: {
    marginLeft: "20px",
    display: "none"
  },

  logoImage: {
    height: "100px",
    width: "100px",
    top: "30px",
    left: "5px",
    position: "absolute"
  },

  personalized: {
    fontFamily: "Rubik,sans-serif",
    fontSize: "500%",
    color: "#0F7DC2",
    top: "117px",
    position: "absolute"
  },

  learning: {
    position: "absolute",
    fontSize: "64px",
    fontFamily: "muli, sans-serif",
    top: "207px"
  },

  iitians: {
    display: "flex",
    justifyContent: "space-between",
    top: "320px",
    left: "3px",
    width: "20%",
    position: "absolute",
    fontFamily: "muli, sans-serif",
    color: "#6b6b6b"
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
    <div style={{ position: "relative", marginTop: "40px", marginLeft: "20px" }}>
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
      <div className={classes.content}>
        <img src={logo} className={classes.logoImage} alt="Logo" />
        <h1 className={classes.personalized}>Personalized</h1>
        <h2 className={classes.learning}>
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
          <div className={classes.iitians} style={{ width: "45%" }}>
            <h1>IIT</h1>
            <h1>NEET</h1>
            <h1>
              Foundation (8th, 9th & 10th)
              {/* (8<sup>th</sup> 9<sup>th</sup> 10<sup>th</sup>) */}
            </h1>
          </div>
        </div>
        <div className={classes.firstLine}>
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
