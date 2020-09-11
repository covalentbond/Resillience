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

const styles = () => ({
  homeImageWeb: {
    height: "110vh",
    marginLeft: "41.45%",
    "@media only screen and (max-width: 770px)": {
      display: "none"
    }
  },
  homeImagePhone: {
    width: "100%",
    // display: "none",
    "@media only screen and (min-width: 770px)": {
      display: "none"
    }
  },
  logoImage: {
    height: "100px",
    width: "100px",
    top: "30px",
    left: "5px",
    position: "absolute",
    "@media only screen and (max-width: 770px)": {
      height: "80px",
      width: "80px"
    }
  },
  content: {
    // disply: "flex",
    flexDirection: "column",
    marginTop: "12.3%",
    "@media only screen and (max-width: 770px)": {
      marginTop: "0",
      textAlign: "center"
    }
  },
  personalized: {
    fontFamily: "Rubik,sans-serif",
    fontSize: "500%",
    color: "#0F7DC2",
    margin: "0",
    "@media only screen and (max-width: 770px)": {
      fontSize: "300%"
    }
  },

  learning: {
    fontSize: "64px",
    margin: "-4px 0 0 0",
    "@media only screen and (max-width: 770px)": {
      fontSize: "35px",
      margin: "2%"
    }
  },

  iitians: {
    color: "#6b6b6b",
    lineHeight: "1.6",
    margin: "0",
    "@media only screen and (max-width: 770px)": {
      fontSize: "20px"
    }
  },

  rectangleStroke: {
    zIndex: "-1",
    marginTop: "38px",
    marginLeft: "4px",
    position: "absolute",
    "@media only screen and (max-width: 770px)": {
      marginTop: "19px",
      marginLeft: "-8px",
      width: "125px",
      height: "12px"
    }
  },

  firstLine: {
    fontSize: "1.55rem",
    marginTop: "12px"
  }
});

function LandingPage(props) {
  const { classes } = props;
  return (
    <div style={{ position: "relative", marginTop: "40px", marginLeft: "2%" }}>
      <img className={classes.homeImageWeb} src={HomePageWeb} alt="Home Page Main" style={{ position: "absolute", right: "0" }} />
      <img className={classes.homeImagePhone} src={HomePagePhone} alt="Home Page Main" />
      <div className={classes.content}>
        <img src={logo} className={classes.logoImage} alt="Logo" />
        <h1 className={classes.personalized}>Personalized</h1>
        <h2 className={classes.learning}>
          learning with{" "}
          <span>
            <img alt="Bg Design" src={rectangleStroke} className={classes.rectangleStroke} />
            IITians
          </span>
        </h2>

        <h1 className={classes.iitians}>IIT &nbsp; NEET &nbsp; Foundation&nbsp;(8th, 9th & 10th)</h1>

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
            {/* Book a FREE */}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(LandingPage);
