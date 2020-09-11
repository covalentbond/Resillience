import React, { Component } from "react";
import BlogContent from "./BlogContent";
import SidebarAbout from "./SidebarAbout";
import SidebarSocial from "./SidebarSocial";

import Card from "@material-ui/core/Card";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import "react-quill/dist/quill.snow.css"; // ES6
import "../textEditor.css";

//Material Ui

import axios from "axios";

const styles = () => ({
  image: {
    display: "flex",
    padding: "5%",
    paddingTop: "8%",
    justifyContent: "space-between"
  },
  section: {
    backgroundColor: "white",
    width: "70%"
  },
  heading: {
    paddingTop: "2%",
    textAlign: "center",
    letterSpacing: "-1px"
  },
  date: {
    fontSize: "20px",
    padding: "12px 15px"
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "2%",
    width: "28%"
  }
});

class ParticularBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "",
      date: "",
      content: ""
    };
  }

  componentDidMount = () => {
    const id = this.props.match.params.id; // Get id handle from the route parameter.
    axios.get(`/blogs/${id}`).then((res) => {
      // console.log(res.data.blog.content);
      this.setState({
        heading: res.data.blog.heading,
        date: res.data.blog.date,
        content: res.data.blog.content
      });
    });
  };

  render() {
    const { classes } = this.props;
    //Need to parse the html string
    return (
      <div className={classes.image}>
        <Card className={classes.section}>
          <Typography gutterBottom variant="h3" component="h2" className={classes.heading}>
            {this.state.heading}
          </Typography>
          <Typography gutterBottom component="h2" color="textSecondary" className={classes.date}>
            {this.state.date}
          </Typography>
          <BlogContent html={this.state.content} />
        </Card>
        <div className={classes.sidebar}>
          <SidebarAbout />
          <SidebarSocial />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ParticularBlog);
