import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

//Images
import calculator from "../images/calculator.svg";
import magnet from "../images/magnet.svg";
import lab from "../images/lab.svg";
import blackboard from "../images/blackboard.svg";

//MUI
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const styles = () => ({
  root: {
    flexGrow: 1
  },
  headingCard: {
    height: "68px",
    display: "flex",
    padding: "24px",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  heading: {
    display: "flex",
    flexDirection: "column"
  },
  subjects: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px"
  },
  subjectImages: {
    objectFit: "contain",
    width: "120px",
    height: "120px",
    paddingBottom: "20px"
  }
});

function Tests(props) {
  const { classes } = props;
  return (
    <div>
      <Paper elevation={0} className="MuiPaper-rounded">
        <Card className="outerCard" variant="outlined">
          <CardContent className={classes.headingCard}>
            <div className={classes.heading}>Select a subject</div>
          </CardContent>

          <Divider light />

          <CardContent>
            <Grid container className={classes.root} spacing={2}>
              <Grid className="subjectGrid" item xs={6} sm={3}>
                <Paper className={classes.subjects} elevation={2}>
                  <img
                    src={calculator}
                    className={classes.subjectImages}
                    alt="Mathematics"
                  />
                  <Typography variant="body-2">Mathematics</Typography>
                </Paper>
              </Grid>

              <Grid className="subjectGrid" item xs={6} sm={3}>
                <Paper className={classes.subjects} elevation={2}>
                  <img
                    src={magnet}
                    className={classes.subjectImages}
                    alt="Physics"
                  />
                  <Typography variant="body-2">Physics</Typography>
                </Paper>
              </Grid>

              <Grid className="subjectGrid" item xs={6} sm={3}>
                <Paper className={classes.subjects} elevation={2}>
                  <img src={lab} className={classes.subjectImages} alt="Chemsitry" />
                  <Typography variant="body-2">Chemistry</Typography>
                </Paper>
              </Grid>

              <Grid className="subjectGrid" item xs={6} sm={3}>
                <Paper className={classes.subjects} elevation={2}>
                  <img
                    src={blackboard}
                    className={classes.subjectImages}
                    alt="Foundation Classes"
                  />
                  <Typography variant="body-2">Foundation Classes</Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Tests);
