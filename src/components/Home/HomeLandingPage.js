import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import logo from "../../images/Resillience-Logo.png";
import HomePageWeb from "../../images/homeLandingImageWeb.svg";
import HomePagePhone from "../../images/homeLandingImagePhone.svg";
import rectangleStroke from "../../images/rectangleStroke.svg";
import Counselling from "./Counselling";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const styles = () => ({
  homeImageWeb: {
    height: "110vh",
    marginLeft: "41.45%",
    "@media only screen and (max-width: 1300px)": {
      height: "100vh"
    },
    "@media only screen and (max-width: 1200px)": {
      height: "90vh"
    },
    "@media only screen and (max-width: 1150px)": {
      height: "80vh"
    },
    "@media only screen and (max-width: 1000px)": {
      height: "70vh"
    },
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
    "@media only screen and (max-width: 1100px)": {
      height: "65px",
      width: "65px"
    },
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
    fontSize: "80px",
    color: "#0F7DC2",
    margin: "0",
    "@media only screen and (max-width: 1300px)": {
      fontSize: "75px"
    },
    "@media only screen and (max-width: 1150px)": {
      fontSize: "70px"
    },
    "@media only screen and (max-width: 1025px)": {
      fontSize: "65px"
    },
    "@media only screen and (max-width: 1000px)": {
      fontSize: "60px"
    },
    "@media only screen and (max-width: 950px)": {
      fontSize: "55px"
    },
    "@media only screen and (max-width: 900px)": {
      fontSize: "50px"
    },
    "@media only screen and (max-width: 770px)": {
      fontSize: "300%"
    }
  },

  learning: {
    fontSize: "64px",
    margin: "-4px 0 0 0",
    "@media only screen and (max-width: 1300px)": {
      fontSize: "60px"
    },
    "@media only screen and (max-width: 1150px)": {
      fontSize: "55px"
    },
    "@media only screen and (max-width: 1050px)": {
      fontSize: "50px"
    },
    "@media only screen and (max-width: 1000px)": {
      fontSize: "45px"
    },
    "@media only screen and (max-width: 950px)": {
      fontSize: "40px"
    },
    "@media only screen and (max-width: 900px)": {
      fontSize: "35px"
    },
    "@media only screen and (max-width: 770px)": {
      fontSize: "35px",
      margin: "2%"
    }
  },

  iitians: {
    color: "#6b6b6b",
    lineHeight: "1.6",
    margin: "0",
    "@media only screen and (max-width: 1200px)": {
      fontSize: "30px"
    },
    "@media only screen and (max-width: 1050px)": {
      fontSize: "30px"
    },
    "@media only screen and (max-width: 950px)": {
      fontSize: "28px"
    },
    "@media only screen and (max-width: 900px)": {
      fontSize: "25px"
    },
    "@media only screen and (max-width: 770px)": {
      fontSize: "20px"
    }
  },

  rectangleStroke: {
    zIndex: "-1",
    marginTop: "38px",
    marginLeft: "4px",
    position: "absolute",

    "@media only screen and (max-width: 1150px)": {
      width: "15%",
      marginLeft: "5px"
    },
    "@media only screen and (max-width: 1000px)": {
      display: "none"
    },
    "@media only screen and (max-width: 770px)": {
      display: "initial",
      marginTop: "19px",
      marginLeft: "-8px",
      width: "125px",
      height: "12px"
    },
    "@media only screen and (max-width: 373px)": {
      marginTop: "55px",
      marginLeft: "-180px",
      width: "125px",
      height: "12px"
    }
  },

  firstLine: {
    fontSize: "1.55rem",
    marginTop: "12px",
    "@media only screen and (max-width: 1000px)": {
      fontSize: "1.4rem"
    },
    "@media only screen and (max-width: 850px)": {
      fontSize: "1.3rem"
    }
  },
  clickableIcon: {
    color: "white",
    backgroundColor: "#0F7DC2",
    paddingBottom: "2%",
    borderRadius: "1px 15px 15px 1px",
    paddingLeft: "20%",
    paddingRight: "20%"
  },
  buttonPhone: {
    top: "320px",
    position: "absolute",
    display: " flex",
    flexDirection: "column",
    paddingLeft: "5px",
    left: "-14px",
    "@media only screen and (min-width: 770px)": {
      display: "none"
    }
  },
  spanText: {
    marginBottom: "0",
    fontWeight: "bold",
    color: "#0F7DC2",
    "@media only screen and (max-width: 500px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
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
        <div className={classes.buttonPhone}>
          <WhatsAppIcon
            className={classes.clickableIcon}
            fontSize="large"
            onClick={() => window.open("https://wa.me/919321725155?text=Hi,%20I'm%20interested%20to%20know%20more%20about%20RESILLIENCE%20and%20book%20a%20Mentoring%20Session", "_blank")}
          />
          <a href="tel:+919304228132">
            <PhoneIcon color="secondary" fontSize="large" className={classes.clickableIcon} style={{ marginTop: "10%" }} />
          </a>
        </div>
        <Typography variant="h1" className={classes.personalized}>
          Personalized
        </Typography>
        <h2 className={classes.learning}>
          Learning with{" "}
          <span>
            <img alt="Bg Design" src={rectangleStroke} className={classes.rectangleStroke} />
            IITians
          </span>
        </h2>

        <h1 className={classes.iitians}>IIT JEE&nbsp;(Mains + Advanced) &nbsp; NEET </h1>
        <h1 className={classes.iitians}> Foundation&nbsp;(8th - 10th) </h1>

        <div className={classes.firstLine}>
          <Typography variant="inherit" className={classes.spanText}>
            Book a FREE <Counselling />
            {/* Book a FREE */}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(LandingPage);
