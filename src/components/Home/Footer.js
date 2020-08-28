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

const styles = () => ({
  footerSection: {
    backgroundColor: "#0C659D",
    marginTop: "10%",
    height: "80vh",
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
    "&:hover": {
      color: "#dce5eb"
    },
    cursor: "pointer"
  },
  companyInfo: {
    paddingTop: "11%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 40px 0px 40px"
  },
  articles: {
    display: "flex",
    flexDirection: "column"
  },
  copyright: {
    textAlign: "center"
  }
});
function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.footerSection}>
      <img src={DesignFooterrr} className={classes.designImage} />
      <div>
        <Grid
          container
          spacing={3}
          className={classes.companyInfo}
          style={{ width: "100%", margin: "0" }}
        >
          <Grid item sm={3} xs={12} className={classes.articles}>
            <h1>Resillience</h1>
            <p>Blogs</p>
            <p>Contact us</p>
            <p>Career</p>
            <p>Our Story</p>
          </Grid>
          <Grid item sm={3} xs={12} className={classes.address}>
            <h1>Corresspondence Address</h1>
            <p>
              Twins Hallmark, Sector 19A, Kopar Khairane, Navi Mumbai, Maharashtra
              400709
            </p>
            <h1>Registered Address</h1>
            <p>
              Plot no B81, Anand Nagar MIDC, Additional Ambernath. , Ambernath, Dist
              : Thane – 421506
            </p>
          </Grid>
          <Grid item sm={3} xs={12}>
            <h2>#BeResillient</h2>
            <h1>Follow Us</h1>
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
            <h1>Support Mail</h1>
            <p>resillience.in@gmail.com</p>
            <p>+91 93042 28132</p>
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
