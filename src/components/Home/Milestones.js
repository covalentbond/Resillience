import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
  milestones: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    background: "#0f7dc2",
    position: "relative",
    height: "30vh",
    "@media only screen and (max-width: 770px)": {
      fontSize: "11px",
      padding: "10%",
      flexDirection: "column",
      height: "0%"
    }
  },
  eachMilestone: {
    // width: "25%",
    "@media only screen and (max-width: 770px)": {
      paddingBottom: "2%"
    }
  }
});

function Milestones(props) {
  const { classes } = props;
  return (
    <div className={classes.milestones}>
      <div className={classes.eachMilestone}>
        <h1>125+</h1>
        <h1>Total registered students</h1>
      </div>
      <div className={classes.eachMilestone}>
        <h1>500+</h1>
        <h1>Hours taught online</h1>
      </div>
      <div className={classes.eachMilestone}>
        <h1>7200+</h1>
        <h1>Hours at home</h1>
      </div>
      <div className={classes.eachMilestone}>
        <h1>200+</h1>
        <h1>Guidance on call</h1>
      </div>
    </div>
  );
}

export default withStyles(styles)(Milestones);
