import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//Images
import TeamLandingImage from "../../images/teamLanding.svg";
import Typography from "@material-ui/core/Typography";

//Icons
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";

const styles = () => ({
  teamLanding: {
    height: "100vh",
    width: "100%",
    display: "flex"
  },
  teamLandingImage: {
    position: "absolute",
    right: "0",
    height: "700px",
    width: "531px",
    //width: "600px"
    top: "33px"
    //TODO: top: "51px"
  },
  infoAbout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
    padding: "0 3%"
  },
  title: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  text: {
    fontSize: "24px",
    letterSpacing: "0.02px",
    lineHeight: "1.5",
    opacity: "0.8"
  },
  vision: {
    width: "92%",
    fontStyle: "italic",
    display: "none"
  },
  visionText: {
    fontSize: "24px",
    letterSpacing: "0.02px",
    lineHeight: "1.2",
    opacity: "0.8",
    paddingLeft: "2%"
  }
});

function AboutUs(props) {
  const { classes } = props;
  return (
    <div style={{ marginTop: "100px" }}>
      <div className={classes.teamLanding}>
        <div className={classes.infoAbout}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", marginBottom: "5%" }}
            color="primary"
          >
            About Us
          </Typography>
          <div className={classes.title}>
            {/* TODO: style={{ marginTop: "20px" }} */}
            <Typography
              variant="inherit"
              className={classes.text}
              color="primary"
              style={{ marginTop: "20px" }}
            >
              We are a team of IIT graduate mentors, and dedicated professionals with
              a single goal to provide perfect and result oriented solution for
              IIT/NEET preparation.
            </Typography>
            <Typography
              variant="inherit"
              color="primary"
              className={classes.text}
              style={{ fontSize: "24px", marginTop: "13px" }}
              //, marginBottom: "13px"
            >
              Our vision is to empower India in all the domains by providing talent
              based skill development opportunities.
            </Typography>
          </div>

          <Typography
            variant="inherit"
            color="secondary"
            className={classes.text}
            style={{ fontSize: "27px", marginTop: "86px" }}
            //, marginBottom: "13px"
          >
            “ Everyone can learn and excel but the ways will be different. ”
          </Typography>
          <Typography variant="inherit" color="primary" className={classes.text}>
            <i> ~ Team Resillience</i>
          </Typography>
          <div className={classes.vision}>
            <Typography
              variant="h5"
              color="primary"
              className={classes.text}
              style={{ fontSize: "27px", marginBottom: "8px", fontStyle: "normal" }}
            >
              Vision:
            </Typography>
            <div style={{ display: "flex", marginTop: "1.5%" }}>
              <CheckRoundedIcon color="secondary" />
              <Typography
                variant="inherit"
                className={classes.visionText}
                color="primary"
                style={{ textAlign: "left" }}
              >
                Provides talent based skill development opportunities.
              </Typography>
            </div>
            <div style={{ display: "flex", marginTop: "1.5%" }}>
              <CheckRoundedIcon color="secondary" />
              <Typography
                variant="inherit"
                className={classes.visionText}
                color="primary"
                style={{ textAlign: "left" }}
              >
                Personal guidance of field experts
              </Typography>
            </div>
            <div style={{ display: "flex", marginTop: "1.5%" }}>
              <CheckRoundedIcon color="secondary" />
              <Typography
                variant="inherit"
                className={classes.visionText}
                color="primary"
                style={{ textAlign: "left" }}
              >
                Provide perfect solutions to growing challenges in the current
                education system
              </Typography>
            </div>
            <div style={{ display: "flex", marginTop: "1.5%" }}>
              <CheckRoundedIcon color="secondary" />
              <Typography
                variant="inherit"
                className={classes.visionText}
                color="primary"
                style={{ textAlign: "left" }}
              >
                Backing the personalized learning system with appropriate and
                advanced technological support
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <img
            src={TeamLandingImage}
            alt="Team Landing Page"
            className={classes.teamLandingImage}
          />
        </div>
      </div>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.996033161349!2d72.99782361437727!3d19.107829955937806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1bb77d10f5b%3A0x44110fc0df9a690f!2sRESILLIENCE%20%7CIIT%20JEE%20-%20NEET%20-%20Foundation(8th%2C%209th%20%2610th)%20%7C%20Online%2FHome%20Tuition%20by%20IITians!5e0!3m2!1sen!2sin!4v1598373962132!5m2!1sen!2sin"
        width="800"
        height="600"
        frameBorder="0"
        // style="border:0;"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      /> */}
    </div>
  );
}

export default withStyles(styles)(AboutUs);
