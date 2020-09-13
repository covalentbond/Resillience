import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";
import TeacherImage from "../../images/teachersNew.svg";

const styles = () => ({
  teacherImage: {
    paddingBottom: "5%",
    width: "100%",
    "@media only screen and (max-width: 770px)": {
      height: "200px"
    }
  }
});

function OurTeam(props) {
  const { classes } = props;
  return (
    <div>
      {/* <Typography variant="h4" color="secondary" className={classes.text} style={{ textAlign: "center", marginBottom: "8px", fontStyle: "normal" }}>
        Our Team:
      </Typography> */}
      <div>
        <img alt="Teacher" src={TeacherImage} className={classes.teacherImage}></img>
      </div>
    </div>
  );
}

export default withStyles(styles)(OurTeam);
