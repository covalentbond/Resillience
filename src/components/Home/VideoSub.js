import React from "react";
import Slider from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
  iframe: {
    width: "400px",
    height: "200px"
    // "@media only screen and (max-width: 637px)": {
    //   width: "300px",
    //   height: "150px"
    // }
  }
});

class VideoSub extends React.Component {
  render() {
    const { classes } = this.props;
    var settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 3000,
      autoplaySpeed: 7000,
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
      <Slider {...settings}>
        {[
          "https://www.youtube.com/embed/sh0EGUheef8/",
          "https://www.youtube.com/embed/1H72tRzG5TU",
          "https://www.youtube.com/embed/cbBB-unybLA",
          "https://www.youtube.com/embed/lv-YIJC1xWo",
          "https://www.youtube.com/embed/PBwslCZRnaU",
          "https://www.youtube.com/embed/w2zQ4lMFoMg"
        ].map((value, index) => (
          <div key={index}>
            <iframe
              title="Youtube"
              aria-hidden="true"
              className={classes.iframe}
              src={value}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
        ))}
      </Slider>
    );
  }
}

export default withStyles(styles)(VideoSub);
