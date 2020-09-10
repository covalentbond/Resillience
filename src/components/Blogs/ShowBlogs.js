import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import "react-quill/dist/quill.snow.css"; // ES6
import "./textEditor.css";

import axios from "axios";

const styles = () => ({
  section: {
    marginTop: "5%"
  },
  blogHeading: {
    textAlign: "center"
  }
});

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "",
      description: "",
      editorHtml: "",
      date: ""
    };
  }

  componentDidMount = () => {
    axios.get("/blogs").then((res) => {
      console.log(res.data.blogs);
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <Typography variant="h3" color="primary" className={classes.blogHeading}>
          Resillience Blog Section
        </Typography>
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
