import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Online1to1 from "../../images/online1to1.svg";
import OnlineGroup from "../../images/teacher.svg";
import HomeTuition from "../../images/hometuition.svg";

//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = () => ({
  sectionBg: {
    height: "100%",
    textAlign: "center",
    paddingTop: "14%",
    marginBottom: "10%",
    "@media only screen and (max-width: 767px)": {
      marginBottom: "20%",
      paddingTop: "90%"
    }
  },
  homeTuition: {
    width: "70%",
    height: "240px",
    objectFit: "contain",
    padding: "3.5%",
    "@media only screen and (max-width: 767px)": {
      maxWidth: "80%"
    }
  },
  oneToOne: {
    objectFit: "contain",
    padding: "10%",
    width: "70%",
    padding: "3.5%",
    "@media only screen and (max-width: 767px)": {
      maxWidth: "80%"
    }
  },
  onlineGroup: {
    padding: "5%",
    width: "90%",
    height: "265px",
    objectFit: "contain",
    "@media only screen and (max-width: 767px)": {
      maxWidth: "80%"
    }
  }
});

function HomeFeatures(props) {
  const { classes } = props;
  return (
    <div>
      <section className={classes.sectionBg}>
        <Typography
          variant="h3"
          color="primary"
          style={{ margin: "5%", marginBottom: "2%" }}
        >
          Features.
        </Typography>
        <Grid
          container
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginLeft: "0",
            marginRight: "0"
          }}
          spacing={5}
        >
          <Grid item sm={3} xs={12}>
            <Paper elevation={4}>
              <img
                className="feature-image"
                src={HomeTuition}
                className={classes.homeTuition}
                alt="Home Tuition"
              />
              <Typography
                variant="h5"
                color="primary"
                style={{ marginBottom: "7%" }}
              >
                Personalized Home Classes
              </Typography>
              <Typography variant="body1" color="primary">
                Read More
              </Typography>
            </Paper>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Paper elevation={4}>
              <img
                className="feature-image"
                className={classes.oneToOne}
                src={Online1to1}
                alt="Online one to one Tuition"
              />
              <Typography
                variant="h5"
                color="primary"
                style={{ marginBottom: "7%" }}
              >
                Online Individual classes.
              </Typography>
              <Typography variant="body1" color="primary">
                Read More
              </Typography>
            </Paper>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Paper elevation={4}>
              <img
                className="feature-image"
                src={OnlineGroup}
                className={classes.onlineGroup}
                alt="Online Group Study"
              />
              <Typography
                variant="h5"
                color="primary"
                style={{ marginBottom: "7%" }}
              >
                Online Group Classes
              </Typography>
              <Typography variant="body1" color="primary">
                Read More
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default withStyles(styles)(HomeFeatures);
