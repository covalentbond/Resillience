import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import TeacherImage from "../../images/teachersNew.svg";

const styles = () => ({
  teacherImage: {
    paddingBottom: "5%",
    width: "90%",
    "@media only screen and (max-width: 770px)": {
      height: "200px"
    }
  }
});

function OurTeam(props) {
  const { classes } = props;
  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <img alt="Teacher" src={TeacherImage} className={classes.teacherImage}></img>
    </div>
  );
}

export default withStyles(styles)(OurTeam);