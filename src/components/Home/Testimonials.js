import React from "react";
import Slider from "react-slick";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import list from "./testimonialList";

const styles = () => ({
  sectionBg: {
    height: "90%",
    textAlign: "center",
    padding: "2% 8% 2% 8%",
    fontSize: "16px",
    "@media only screen and (max-width: 767px)": {
      marginBottom: "20%",
      paddingTop: "90%"
    },
    backgroundColor: "#D3D3D3"
  },
  tEach: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  tImage: {
    width: "100%",
    margin: "auto"
  },
  tDesc: {
    width: "100%"
  }
});

function Testimonials(props) {
  const { classes } = props;
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 7000,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className={classes.sectionBg}>
      <Typography
        variant="h3"
        color="primary"
        style={{ margin: "5%", marginBottom: "2%", letterSpacing: "-1px" }}
      >
        Our students & parents love us
      </Typography>
      <Slider {...settings}>
        {list.map((eachTestimonial, index) => (
          <div className={classes.tEach} key={index}>
            <div className={classes.tImage}>
              <img
                src={eachTestimonial.image}
                style={{ display: "initial", width: "50%" }}
              />
            </div>
            <div className={classes.tDesc}>
              <Typography variant="inherit" color="primary">
                {eachTestimonial.message}
              </Typography>
              <Typography variant="h6" color="primary">
                {eachTestimonial.name}
              </Typography>
              <Typography variant="subtitle2" color="primary">
                {eachTestimonial.designation}
              </Typography>
            </div>
          </div>
        ))}
      </Slider>
      <br />
      <br />
      <br />
      <br />
      <Typography
        variant="inherit"
        color="primary"
        style={{ padding: "5%", fontStyle: "italic", fontSize: "22px" }}
      >
        We are proud to share that we have helped so many students making them
        achieve their goal
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Testimonials);
