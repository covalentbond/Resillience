import React from "react";
import { HashLink as Link } from "react-router-hash-link";
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
  grid: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginLeft: "0",
    marginRight: "0"
  },
  card: {},
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
    height: "240px",
    width: "70%",
    padding: "3.5%",
    "@media only screen and (max-width: 767px)": {
      maxWidth: "80%"
    }
  },
  onlineGroup: {
    padding: "3.5%",
    width: "90%",
    height: "240px",
    objectFit: "contain",
    "@media only screen and (max-width: 767px)": {
      maxWidth: "80%"
    }
  },
  fHeading: {
    padding: "0 7% 7% 7%",
    "&:hover": {
      color: "#6b6b6b"
    }
  },
  readMore: {
    paddingBottom: "5%",
    "&:hover": {
      color: "#6b6b6b",
      letterSpacing: "1.2px"
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
          style={{ margin: "5%", marginBottom: "2%", letterSpacing: "-1px" }}
        >
          Features.
        </Typography>
        <Grid container className={classes.grid} spacing={5}>
          <Grid item sm={3} xs={12} className={classes.card}>
            <Paper elevation={4}>
              <img
                src={HomeTuition}
                className={classes.homeTuition}
                alt="Home Tuition"
              />
              <Typography variant="h6" color="primary" className={classes.fHeading}>
                One on One home tuition throughout Mumbai
              </Typography>
              <Link to="features/#oneToOneHomeClasses">
                <Typography
                  variant="body1"
                  color="primary"
                  className={classes.readMore}
                >
                  READ MORE -
                </Typography>
              </Link>
            </Paper>
          </Grid>
          <Grid item sm={3} xs={12} className={classes.card}>
            <Paper elevation={4}>
              <img
                className={classes.oneToOne}
                src={Online1to1}
                alt="Online one to one Tuition"
              />
              <Typography variant="h6" color="primary" className={classes.fHeading}>
                One on One live online tuition
              </Typography>
              <Link to="features/#oneToOneOnlineClasses">
                <Typography
                  variant="body1"
                  color="primary"
                  className={classes.readMore}
                >
                  READ MORE -
                </Typography>
              </Link>
            </Paper>
          </Grid>
          <Grid item sm={3} xs={12} className={classes.card}>
            <Paper elevation={4}>
              <img
                src={OnlineGroup}
                className={classes.onlineGroup}
                alt="Online Group Study"
              />
              <Typography variant="h6" color="primary" className={classes.fHeading}>
                Group live online tuitions anywhere
              </Typography>
              <Link to="features/#groupLiveClasses">
                <Typography
                  variant="body1"
                  color="primary"
                  className={classes.readMore}
                >
                  READ MORE -
                </Typography>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default withStyles(styles)(HomeFeatures);
