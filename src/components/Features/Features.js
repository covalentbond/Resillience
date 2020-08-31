import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

//Images
// import onlineOneToOne from "../../images/onlineOneToOne.svg";
import onlineOneToOne from "../../images/online-classes.png";
import liveDoubts from "../../images/Questions.svg";

import masteringChapter from "../../images/masteringChapters.svg";
import oneToOne from "../../images/oneToOne.svg";

const styles = () => ({
  featureSection: {
    height: "70vh",
    display: "flex",
    marginBottom: "5%",
    paddingLeft: "11.5%",
    paddingRight: "11.5%"
  },
  fImage: {
    width: "40%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    padding: "3%"
  },
  fDescription: {
    display: "flex",
    width: "60%",
    flexDirection: "column"
  },
  descHeading: {
    textAlign: "center",
    marginTop: "3%",
    letterSpacing: "-0.5px"
  }
});
function Features(props) {
  const { classes } = props;
  return (
    <div style={{ marginTop: "80px" }}>
      <Typography
        variant="h3"
        color="primary"
        style={{ margin: "5%", textAlign: "center", letterSpacing: "-1px" }}
      >
        Features
      </Typography>
      <div className={classes.featureSection}>
        <div className={classes.fImage}>
          <img alt="One to One" src={oneToOne} />
        </div>
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            One on One home Tuition for proper understanding
          </Typography>
        </div>
      </div>
      <div className={classes.featureSection}>
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            Mastering single chapters as when needed
          </Typography>
        </div>
        <div className={classes.fImage}>
          <img alt="Mastering Chapter" src={masteringChapter} />
        </div>
      </div>
      <div className={classes.featureSection}>
        <div className={classes.fImage}>
          <img alt="Online One to One Classes" src={onlineOneToOne} />
        </div>
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            One on One live online Tuition
          </Typography>
        </div>
      </div>
      <div className={classes.featureSection}>
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            Online group classes for more accountability
          </Typography>
        </div>
        <div className={classes.fImage}>IMAGE</div>
      </div>
      <div className={classes.featureSection}>
        <div className={classes.fImage}>
          <img alt="Live doubts" src={liveDoubts} />
        </div>
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            Get an instant solution to every doubt via Chat & Call
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(Features);
