import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const styles = () => ({});

function Vision(props) {
  const { classes } = props;

  return (
    <div className={classes.vision}>
      <Typography
        variant="h4"
        color="secondary"
        className={classes.text}
        style={{ textAlign: "center", marginBottom: "8px", fontStyle: "normal" }}
      >
        Our Story:
      </Typography>
      <div className={classes.visionContent}>
        <div className={classes.eachVision}>
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
        <div className={classes.eachVision}>
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
        <div className={classes.eachVision}>
          <CheckRoundedIcon color="secondary" />
          <Typography
            variant="inherit"
            className={classes.visionText}
            color="primary"
            style={{ textAlign: "left" }}
          >
            Provide perfect solutions to growing challenges in the current education
            system
          </Typography>
        </div>
        <div className={classes.eachVision}>
          <CheckRoundedIcon color="secondary" />
          <Typography
            variant="inherit"
            className={classes.visionText}
            color="primary"
            style={{ textAlign: "left" }}
          >
            Backing the personalized learning system with appropriate and advanced
            technological support
          </Typography>
        </div>
        <div className={classes.eachVision}>
          <CheckRoundedIcon color="secondary" />
          <Typography
            variant="inherit"
            className={classes.visionText}
            color="primary"
            style={{ textAlign: "left" }}
          >
            Provide perfect solutions to growing challenges in the current education
            system and whosoever will be responsible, have to do the work
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Vision);
