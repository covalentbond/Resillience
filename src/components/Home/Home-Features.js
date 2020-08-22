import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

import Online1to1 from "../../images/online1to1.svg";
import OnlineGroup from "../../images/teacher.svg";
import HomeTuition from "../../images/hometuition.svg";

//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

function HomeFeatures() {
  return (
    <div>
      <section
        className="section-bg"
        style={{
          height: "100vh",
          textAlign: "center"
          // position: "relative"
          // backgroundColor: "#cee7f5"
        }}
      >
        <Typography variant="h3" color="primary" style={{ margin: "5%" }}>
          Features.
        </Typography>
        <Grid
          container
          style={{ justifyContent: "center", alignItems: "center", width: "100%" }}
          spacing={5}
        >
          <Grid item sm={3} xs={12}>
            <Paper elevation={4}>
              <img
                className="feature-image"
                style={{ objectFit: "contain" }}
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
                style={{
                  padding: "5%",
                  width: "280px",
                  height: "300px",
                  objectFit: "contain"
                }}
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
          <Grid item sm={3} xs={12}>
            <Paper elevation={4}>
              <img
                className="feature-image"
                src={HomeTuition}
                style={{ width: "250px", height: "260px", objectFit: "contain" }}
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
        </Grid>
      </section>
    </div>
  );
}

export default HomeFeatures;
