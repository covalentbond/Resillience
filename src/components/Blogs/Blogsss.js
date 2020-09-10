import React, { Component } from "react";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";

import axios from "axios";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "", // ResillieNCE Journey
      data: "", //<p><strong>aaaasdd and</strong></p>
      date: "", //22 Aug' 20
      minsRead: 0, //9min
      claps: 0,
      comments: [], //[{"Arijit": "Amazing blog"},{"Apurv": "Enjoyed a lot"}],
      blogLink: "" //"https://resillience.in/blogs/resillience%20journey"
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const blogData = {
      heading: this.state.heading,
      data: this.state.data,
      date: this.state.date,
      minsRead: this.state.minsRead
    };

    console.log(blogData);
    axios
      .post("/blogCreate", blogData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // res.data: {message: "Blog created successfully"}
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h2>Using CKEditor 5 build in React</h2>
        <form onClick={this.handleSubmit}>
          <CKEditorReact
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onInit={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              this.setState({
                data: this.state.data
              });

              // console.log({ event, editor, data });
              //<p><strong>aaaasdd and</strong></p>
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Blog;
