import React, { Component } from "react";
import "react-quill/dist/quill.snow.css"; // ES6
import "./textEditor.css";
import Image from "../../images/blogImage.svg";

//Material Ui
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import axios from "axios";

const styles = () => ({
  root: {
    margin: "0 30% 5% 30%"
  },
  section: {
    marginTop: "4.2%",
    "@media only screen and (max-width: 770px)": {
      marginTop: "13%"
    }
  },
  image: {
    paddingBottom: "10%",
    "@media only screen and (max-width: 770px)": {
      width: "100%"
    }
  },
  blogHeading: {
    textAlign: "center"
  },
  description: {
    fontSize: "20px"
  }
});

class Blog extends Component {
  state = {
    heading: "",
    description: "",
    date: "",
    blogArray: []
  };

  componentDidMount = () => {
    axios.get("/blogs").then((res) => {
      // console.log(res.data.blogs);
      this.setState({
        blogArray: res.data.blogs
      });
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <img alt="BlogsBold" src={Image} className={classes.image}></img>
        <div className={classes.grid}>
          {this.state.blogArray.map((eachBlog, index) => (
            <Card className={classes.root} key={index}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Scenery"
                  height="250"
                  className={classes.media}
                  image="https://ae01.alicdn.com/kf/HTB1lRs8HVXXXXXUXFXXq6xXFXXX2/Free-shipping-scenery-wall-tapestry-The-inverted-image-of-woods-classical-design-size-20x25cm-decor-picture.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    {eachBlog.heading}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="h2">
                    {eachBlog.date}
                  </Typography>
                  <Typography className={classes.description} color="textSecondary" component="h2">
                    {eachBlog.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="large"
                  color="secondary"
                  onClick={() => {
                    window.location.href = `/blogs/${eachBlog._id}`;
                  }}
                >
                  Read More...
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Blog);

//delta, content, source
// const text = editor.getText(html);
// console.log("Only Text", text);
// editor.getContents(html);
// console.log(delta);

// claps: 0,
// comments: [], //[{"Arijit": "Amazing blog"},{"Apurv": "Enjoyed a lot"}],
// blogLink: "" //"https://resillience.in/blogs/resillience%20journey"
