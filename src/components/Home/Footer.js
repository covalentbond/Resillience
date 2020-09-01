import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import DesignFooterrr from "../../images/design-footerrr1.svg";

//MUI Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  footerSection: {
    backgroundColor: "#0C659D",
    marginTop: "10%",
    height: "80%",
    boxSizing: "border-box",
    position: "relative",
    color: "white"
  },
  designImage: {
    width: "100%",
    position: "absolute"
    // zIndex: "-1",
  },
  socialIcons: {
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "50%"
  },
  clickableIcon: {
    color: "#cccccc",
    "&:hover": {
      color: "white"
    },
    cursor: "pointer"
  },
  companyInfo: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12% 2.9% 1.5% 2.9%"
  },
  articles: {
    display: "flex",
    flexDirection: "column"
  },
  copyright: {
    textAlign: "center",
    color: "#cccccc",
    marginBottom: "0px",
    marginTop: "0px",
    paddingTop: "1.5%",
    paddingBottom: "1.5%",
    "@media only screen and (max-width: 767px)": {
      paddingTop: "4.5%",
      paddingBottom: "4.5%"
    }
  }
});
function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.footerSection}>
      <img
        src={DesignFooterrr}
        className={classes.designImage}
        alt="Design Footer"
      />
      <div>
        <Grid
          container
          spacing={3}
          className={classes.companyInfo}
          style={{ width: "100%", margin: "0" }}
        >
          <Grid item sm={3} xs={12} className={classes.articles}>
            <Typography variant="h5">Resillience</Typography>
            <br></br>
          </Grid>
          <Grid item sm={3} xs={12} className={classes.articles}>
            <Typography variant="h5">Quick Links</Typography>
            <p style={{ marginBottom: "0px", color: "#cccccc" }}>Blogs</p>
            <p style={{ marginBottom: "0px", color: "#cccccc" }}>Contact us</p>
            <p style={{ marginBottom: "0px", color: "#cccccc" }}>Career</p>
            <p style={{ marginBottom: "0px", color: "#cccccc" }}>Our Story</p>
          </Grid>
          <Grid item sm={3} xs={12} className={classes.address}>
            <Typography variant="h5">Corresspondence Address</Typography>
            <p style={{ color: "#cccccc" }}>
              Twins Hallmark, Sector 19A, Kopar Khairane, Navi Mumbai, Maharashtra
              400709
            </p>
            <Typography variant="h5">Registered Address</Typography>
            <p style={{ color: "#cccccc" }}>
              Plot no B81, Anand Nagar MIDC, Additional Ambernath. , Ambernath, Dist
              : Thane – 421506
            </p>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="h5">#Being RESILLIENT</Typography>
            <br></br>
            <Typography
              variant="h5"
              style={{ marginTop: "8px", marginBottom: "8px" }}
            >
              Follow Us
            </Typography>
            {/* <br></br> */}
            <div className={classes.socialIcons}>
              <FacebookIcon
                className={classes.clickableIcon}
                onClick={() =>
                  window.open("https://www.facebook.com/resillience.in", "_blank")
                }
              />
              <TwitterIcon
                className={classes.clickableIcon}
                onClick={() =>
                  window.open("https://twitter.com/resillience_in", "_blank")
                }
              />
              <InstagramIcon
                className={classes.clickableIcon}
                onClick={() =>
                  window.open("https://www.instagram.com/resillience.in/", "_blank")
                }
              />
              <YouTubeIcon
                className={classes.clickableIcon}
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCLAs5bDSPA6e3EyWZ8bZsyg",
                    "_blank"
                  )
                }
              />
              <LinkedInIcon
                className={classes.clickableIcon}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/resillience/",
                    "_blank"
                  )
                }
              />
            </div>
            {/* <br></br> */}
            <Typography variant="h5" style={{ marginTop: "24px" }}>
              Support Mail
            </Typography>
            <p style={{ marginBottom: "0px", marginTop: "8px", color: "#cccccc" }}>
              resillience.in@gmail.com
            </p>
            <p style={{ marginBottom: "0px", color: "#cccccc" }}>+91 93042 28132</p>
          </Grid>
        </Grid>
      </div>
      <Divider variant="middle" />
      <p className={classes.copyright}>
        Resillience &copy; Copyright 2020.All rights reserved
      </p>
    </div>
  );
}

export default withStyles(styles)(Footer);
//https://resillienceblog.blogspot.com/
