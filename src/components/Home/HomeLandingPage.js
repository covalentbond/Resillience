import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import logo from "../../images/Resillience-Logo.png";
// import HomePageWeb from "../../images/NewHomeFinalFinall.svg";
// import HomePagePhone from "../../images/homePhone.svg";
import HomePageWeb from "../../images/ravi3.svg";
import HomePagePhone from "../../images/ravi3Phone.svg";
import rectangleStroke from "../../images/rectangleStroke.svg";
import Counselling from "./Counselling";
import Typography from "@material-ui/core/Typography";
import { useEffect } from "react";

const styles = () => ({
  homeImageWeb: {
    height: "110vh",
    marginLeft: "41.45%",
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
    // visibility: "hidden"
  },

  personalized: {
    fontFamily: "Rubik,sans-serif",
    fontSize: "500%",
    color: "#0F7DC2",
    top: "109px",
    position: "absolute"
  },

  learning: {
    position: "absolute",
    fontSize: "64px",
    fontFamily: "muli, sans-serif",
    top: "199px"
  },

  iitians: {
    display: "flex",
    justifyContent: "space-between",
    top: "308px",
    left: "3px",
    width: "20%",
    position: "absolute",
    fontFamily: "muli, sans-serif",
    color: "#6b6b6b"
  },

  firstLine: {
    fontSize: "1.55rem",
    position: "absolute",
    top: "375px"
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
    <div style={{ position: "relative", marginTop: "40px", marginLeft: "2%" }}>
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
              src={rectangleStroke}
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
          <Typography
            variant="inherit"
            style={{
              marginBottom: "0",
              fontWeight: "bold",
              color: "#0F7DC2"
            }}
          >
            Book a FREE <Counselling />
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(LandingPage);
