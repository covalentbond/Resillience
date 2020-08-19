import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

import Online1to1 from "../images/online1to1.svg";
import OnlineGroup from "../images/teacher.svg";
import HomeTuition from "../images/hometuition.svg";

//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

function HomeFeatures() {
  return (
    <div>
      <section
        style={{
          height: "100vh",
          textAlign: "center"
        }}
      >
        <Typography variant="h2" color="primary" style={{ margin: "5%" }}>
          Features.
        </Typography>
        <Grid
          container
          style={{ justifyContent: "center", alignItems: "baseline" }}
          spacing={4}
        >
          <Grid item sm={3} xs={12}>
            <Paper elevation={3}>
              <img
                className="feature-image"
                src={Online1to1}
                alt="Online one to one Tuition"
              />
              <Typography
                variant="h5"
                color="primary"
                style={{ marginBottom: "7%" }}
              >
                Online One to One
              </Typography>
              <Typography variant="body-1" color="primary">
                Online One to One
              </Typography>
            </Paper>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Paper elevation={3}>
              <img
                className="feature-image"
                src={OnlineGroup}
                style={{ padding: "5%", width: "280px", height: "322px" }}
                alt="Online Group Study"
              />
              <Typography
                variant="h5"
                color="primary"
                style={{ marginBottom: "7%" }}
              >
                Online Group Classes
              </Typography>
              <Typography variant="body-1" color="primary">
                Online One to One
              </Typography>
            </Paper>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Paper elevation={3}>
              <img
                className="feature-image"
                src={HomeTuition}
                style={{ width: "250px", height: "290px" }}
                alt="Home Tuition"
              />
              <Typography
                variant="h5"
                color="primary"
                style={{ marginBottom: "7%" }}
              >
                Personalized Home Classes
              </Typography>
              <Typography variant="body-1" color="primary">
                Online One to One
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default HomeFeatures;
