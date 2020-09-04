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
    position: "relative"
  }
});

function Milestones(props) {
  const { classes } = props;
  return (
    <div className={classes.milestones} style={{ height: "30vh" }}>
      <div>
        <h1>125+</h1>
        <h1>Total registered students</h1>
      </div>
      <div>
        <h1>500+</h1>
        <h1>Hours taught online</h1>
      </div>
      <div>
        <h1>7200+</h1>
        <h1>Hours at home</h1>
      </div>
      <div>
        <h1>200+</h1>
        <h1>Guidance on call</h1>
      </div>
    </div>
  );
}

export default withStyles(styles)(Milestones);
