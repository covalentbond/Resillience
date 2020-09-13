import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import Counselling from "./Counselling";

//Images
import masteringChapter from "../../images/masteringChapters.svg";
import liveDoubts from "../../images/Questions.svg";
import strokeFeatures from "../../images/strokeAboutUs.svg";

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
    flexDirection: "column",
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
  subHeading: {
    textAlign: "center",
    marginTop: "3%",
    letterSpacing: "-0.5px"
  },
  content: {
    padding: "5%",
    fontSize: "20px"
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
  },
  eachVision: {
    marginTop: "1.5%",
    display: "flex"
  },
  session: {
    marginTop: "5%"
  }
});
function MasteringAChapter(props) {
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

      <Divider variant="middle" className={classes.divider} />
      <div className={classes.featureSection}>
        <div className={classes.fImageSection}>
          <img className={classes.fImage} alt="Mastering Chapter" src={masteringChapter} />
        </div>
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            Mastering a weak topic
          </Typography>
          <Typography variant="h5" color="primary" className={classes.subHeading}>
            IIT JEE (Main + Advanced), NEET
          </Typography>
          <Typography variant="h5" color="primary" className={classes.subHeading} style={{ opacity: "0.6" }}>
            Both Home & Online Mode
          </Typography>
          <div className={classes.content}>
            {["Unable to solve problems of specific topic?", "Unable to solve problems of specific topic?", "Concerned about the backlogs?", "Problem in solving mixed concept questions?"].map(
              (vision, index) => (
                <span className={classes.eachVision} key={index}>
                  <CheckRoundedIcon color="secondary" style={{ marginRight: "5px" }} />
                  <Typography variant="inherit" className={classes.text} color="primary">
                    {vision}
                  </Typography>
                  <br />
                </span>
              )
            )}
          </div>
          <Counselling />
        </div>
      </div>
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
              None of your doubts will go unanswered, even if they are extremely difficult.
              <br />
              We will instantly reply and resolve your doubts.
              <br />
              Don’t worry, we are ready to help until you’ve completely understood them.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(MasteringAChapter);
