import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

//Images
import onlineOneToOne from "../../images/online-classes.png";
import liveDoubts from "../../images/Questions.svg";
import strokeFeatures from "../../images/strokeAboutUs.svg";

import masteringChapter from "../../images/masteringChapters.svg";
import oneToOne from "../../images/oneToOne.svg";

const styles = () => ({
  featureSection: {
    paddingTop: "5%",
    height: "70%",
    display: "flex",
    // marginBottom: "5%", //As it was not getting alligned properly on referred link
    paddingLeft: "11.5%",
    paddingRight: "11.5%",
    fontSize: "22px",
    "@media only screen and (max-width: 770px)": {
      fontSize: "16px",
      flexDirection: "column",
      paddingLeft: "3%",
      paddingRight: "3%",
      // marginBottom: "0%",
      alignItems: "center"
    }
  },
  featuresText: {
    margin: "5%",
    textAlign: "center",
    letterSpacing: "-1px",
    marginBottom: "0",
    "@media only screen and (max-width: 770px)": {
      marginBottom: "5%"
    }
  },
  fImageSection: {
    width: "40%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    padding: "2%",
    "@media only screen and (max-width: 770px)": {
      fontSize: "16px",
      order: "0",
      width: "60%"
      // visibility: "hidden"
    }
  },
  fImage: {
    width: "100%"
  },
  fDescription: {
    display: "flex",
    width: "60%",
    flexDirection: "column",
    padding: "2%",
    "@media only screen and (max-width: 770px)": {
      order: "1",
      width: "100%"
    }
  },
  descHeading: {
    textAlign: "center",
    marginTop: "3%",
    letterSpacing: "-0.5px"
  },
  content: {
    padding: "5%"
  },
  text: {
    letterSpacing: "0.02px",
    lineHeight: "1.5",
    opacity: "0.8"
  },
  divider: {
    display: "none",
    "@media only screen and (max-width: 770px)": {
      display: "inherit",
      margin: "auto",
      marginBottom: "15%",
      width: "70%"
    }
  }
});
function Features(props) {
  const { classes } = props;
  return (
    <div className="page" style={{ marginTop: "80px" }}>
      <span>
        <img
          alt="Bg Design"
          src={strokeFeatures}
          style={{
            zIndex: "-1",
            marginTop: "38px",
            marginLeft: "42%",
            // marginLeft: "4px",
            position: "absolute"
          }}
        />
        <Typography variant="h3" color="primary" className={classes.featuresText}>
          Features
        </Typography>
      </span>
      <div className={classes.featureSection} id="oneToOneHomeClasses">
        <div className={classes.fImageSection}>
          <img className={classes.fImage} alt="One to One" src={oneToOne} />
        </div>
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            One on One home Tuition for proper understanding
          </Typography>
          <div className={classes.content}>
            <Typography variant="inherit" className={classes.text} color="primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </div>
        </div>
      </div>
      <Divider variant="middle" className={classes.divider} />
      <div className={classes.featureSection}>
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            Mastering single chapters as when needed
          </Typography>
          <div className={classes.content}>
            <Typography variant="inherit" className={classes.text} color="primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </div>
        </div>
        <div className={classes.fImageSection}>
          <img className={classes.fImage} alt="Mastering Chapter" src={masteringChapter} />
        </div>
      </div>
      <Divider variant="middle" className={classes.divider} />
      <div className={classes.featureSection} id="oneToOneOnlineClasses">
        <div className={classes.fImageSection}>
          <img className={classes.fImage} alt="Online One to One Classes" src={onlineOneToOne} />
        </div>
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            One on One live online Tuition
          </Typography>
          <div className={classes.content}>
            <Typography variant="inherit" className={classes.text} color="primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </div>
        </div>
      </div>
      <Divider variant="middle" className={classes.divider} />
      <div className={classes.featureSection} id="groupLiveClasses">
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            Online group classes for more accountability
          </Typography>
          <div className={classes.content}>
            <Typography variant="inherit" className={classes.text} color="primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </div>
        </div>
        <div className={classes.fImageSection}>
          <img className={classes.fImage} alt="Online One to One Classes" src={onlineOneToOne} />
        </div>
      </div>
      <Divider variant="middle" className={classes.divider} />
      <div className={classes.featureSection}>
        <div className={classes.fImageSection}>
          <img className={classes.fImage} alt="Live doubts" src={liveDoubts} />
        </div>
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            Get an instant solution to every doubt via Chat & Call
          </Typography>
          <div className={classes.content}>
            <Typography variant="inherit" className={classes.text} color="primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(Features);
