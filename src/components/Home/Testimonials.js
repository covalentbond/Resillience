import React from "react";
import Slider from "react-slick";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import sakshamPhoto from "../../images/sakshamPhoto.png";

import list from "./testimonialList";

const styles = () => ({
  sectionBg: {
    height: "90%",
    textAlign: "center",
    padding: "2% 8% 2% 8%",
    fontSize: "16px",
    "@media only screen and (max-width: 770px)": {
      marginBottom: "20%",
      padding: "8% 8% 2% 8%"
    }
  },
  tSaksham: {
    display: "flex",
    marginTop: "-1%",
    marginBottom: "7.5%",
    "@media only screen and (max-width: 1000px)": {
      flexDirection: "column"
    }
  },
  tEach: {
    textAlign: "center"
  },
  tDesc: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    width: "100%",
    lineHeight: "1.8",
    marginTop: "1%",
    fontSize: "18px",
    "@media only screen and (max-width: 770px)": {
      fontSize: "16px",
      textAlign: "center"
    }
  },
  sakshamMessage: {
    fontStyle: "italic",
    fontSize: "22px",
    color: "#818181",
    "@media only screen and (max-width: 770px)": {
      fontSize: "16px",
      lineHeight: "1.2"
    }
  },
  tImage: {
    width: "100%",
    margin: "auto"
  }
});

function Testimonials(props) {
  const { classes } = props;
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={classes.sectionBg}>
      <Typography variant="h3" color="primary" style={{ margin: "5%", letterSpacing: "-1px" }}>
        Our students & parents love us
      </Typography>
      <div className={classes.tSaksham}>
        <div className={classes.tImage}>
          <img src={sakshamPhoto} style={{ display: "initial", width: "75%" }} alt="Saksham Student" />
        </div>
        <div className={classes.tDesc}>
          <Typography variant="inherit" className={classes.sakshamMessage}>
            My experience with Resillience was very good. The teachers were the sole reason for whatever I have achieved. Their efforts were really commendable. They know exactly how to prepare a
            child for IIT JEE. Studying smart and hard both is their soul mantra. Aiming at improving concepts and practicing of questions was the major advice. I became very comfortable with all the
            three professors and we developed a very strong bond in short time.
          </Typography>
          <Typography variant="h6" color="primary" style={{ marginTop: "2%" }}>
            Saksham Kamath
          </Typography>
          <Typography variant="inherit" color="primary" style={{ fontSize: "20px" }}>
            Got selected in JEE Adv'19
          </Typography>
        </div>
      </div>

      <Slider {...settings}>
        {list.map((eachTestimonial, index) => (
          <div className={classes.tEach} key={index}>
            <div className={classes.tDesc} style={{ textAlign: "center" }}>
              <Typography variant="inherit" color="primary" style={{ fontStyle: "italic" }}>
                {eachTestimonial.message}
              </Typography>
              <br />
              <Typography variant="inherit" color="primary">
                <span alt="Star Emojis" role="img" aria-label="Star Merit Rating">
                  ⭐⭐⭐⭐⭐
                </span>
              </Typography>
              <Typography variant="h6" color="primary">
                {eachTestimonial.name}
              </Typography>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default withStyles(styles)(Testimonials);
