import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

//Components
import careerImage from "../../images/careerImage.svg";
import TeacherImage from "../../images/teachersNew.svg";

const styles = () => ({
  careerSection: {
    paddingTop: "4.2%",
    "@media only screen and (max-width: 770px)": {
      paddingTop: "13%"
    }
  },
  careerHeading: {
    position: "absolute",
    marginLeft: "55%",
    marginTop: "10%",
    "@media only screen and (max-width: 1024px)": {
      marginLeft: "45%",
      fontSize: "2.5rem"
    }
  },
  content: {
    width: "100%",
    textAlign: "center"
  },
  teacherSection: {
    paddingTop: "5%",
    paddingBottom: "10%"
  },
  teacherImage: {
    width: "100%"
  },
  careerImage: {
    width: "100%"
    // marginTop: "-4.2%"
  },
  text: {
    letterSpacing: "0.02px",
    lineHeight: "1.5",
    // opacity: "0.8",
    fontSize: "22px"
  }
});

function Career(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.careerSection}>
        <div className={classes.content}>
          <Typography className={classes.careerHeading} variant="h2" color="primary">
            Career
          </Typography>
        </div>
        <img alt="Career" className={classes.careerImage} src={careerImage}></img>
      </div>
      <div className={classes.teacherSection}>
        <Typography variant="h3" color="primary" style={{ textAlign: "center" }}>
          Our Team
        </Typography>
        <img alt="Teacher" className={classes.teacherImage} src={TeacherImage}></img>
      </div>
      <div style={{ padding: "5%", textAlign: "center" }}>
        <Typography variant="inherit" className={classes.text} color="primary">
          Come and work together for in the vision of empowering every corner of India by providing "Affordable and Quality" personalized attention in education at home
        </Typography>
        <iframe
          title="Career Recruitment Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSc4kk50CDvPqKOeYD-gCRXouyZL4uMRjNRWbAM_ikTNBMzP9Q/viewform?embedded=true"
          width="100%"
          height="2745px"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{ marginTop: "5%" }}
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
}

export default withStyles(styles)(Career);