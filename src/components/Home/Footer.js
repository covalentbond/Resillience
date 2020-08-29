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
    color: "#cccccc",
    "&:hover": {
      color: "white"
    },
    cursor: "pointer"
  },
  companyInfo: {
    paddingTop: "12%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 40px 0px 40px"
  },
  articles: {
    display: "flex",
    flexDirection: "column"
  },
  copyright: {
    textAlign: "center",
    color: "#cccccc"
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
            <Typography variant="h5">Resillience</Typography>
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
            <Typography variant="h4">#BeResillient</Typography>

            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.996033161349!2d72.99782361437727!3d19.107829955937806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1bb77d10f5b%3A0x44110fc0df9a690f!2sRESILLIENCE%20%7CIIT%20JEE%20-%20NEET%20-%20Foundation(8th%2C%209th%20%2610th)%20%7C%20Online%2FHome%20Tuition%20by%20IITians!5e0!3m2!1sen!2sin!4v1598373962132!5m2!1sen!2sin"
              width="200"
              height="150"
              frameBorder="0"
              // style="border:0;"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            /> */}
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
