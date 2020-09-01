import React from "react";
import Slider from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

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

class Videos extends React.Component {
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
      <div style={{ padding: "40px", position: "relative" }}>
        <Typography
          variant="h3"
          color="primary"
          style={{ margin: "5%", textAlign: "center", letterSpacing: "-1.5px" }}
        >
          Watch our teachers in action
        </Typography>
        <Slider {...settings}>
          <div>
            <iframe
              title="Youtube"
              aria-hidden="true"
              className={classes.iframe}
              src="https://www.youtube.com/embed/sh0EGUheef8/"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          <div>
            <iframe
              title="Youtube"
              aria-hidden="true"
              className={classes.iframe}
              src="https://www.youtube.com/embed/1H72tRzG5TU"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          <div>
            <iframe
              title="Youtube"
              aria-hidden="true"
              className={classes.iframe}
              src="https://www.youtube.com/embed/cbBB-unybLA"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          <div>
            <iframe
              title="Youtube"
              aria-hidden="true"
              className={classes.iframe}
              src="https://www.youtube.com/embed/lv-YIJC1xWo"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          <div>
            <iframe
              title="Youtube"
              aria-hidden="true"
              className={classes.iframe}
              src="https://www.youtube.com/embed/PBwslCZRnaU"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          <div>
            <iframe
              title="Youtube"
              aria-hidden="true"
              className={classes.iframe}
              src="https://www.youtube.com/embed/w2zQ4lMFoMg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          {/* <div>
                        <iframe
              title="Youtube"
              aria-hidden="true"
              className={classes.iframe}
              src="https://www.youtube.com/embed/gwNaLLQUHgs"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen

              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          <div>
                        <iframe
              title="Youtube"
              aria-hidden="true"
              className={classes.iframe}
              src="https://www.youtube.com/embed/ubWLlaTN3Fw"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen

              webkitallowfullscreen="true"
              mozallowfullscreen="true"


            ></ifrAme>
         </div>
          <div>
                        <iframe
              title="Youtube"
              aria-hidden="true"
              className={classes.iframe}
              src="https://www.youtube.com/embed/s6mvwNxPJ6g"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen

              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div> */}
        </Slider>
      </div>
    );
  }
}

export default withStyles(styles)(Videos);
