import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    exams: [],
    testTypes: {}

    //TODO: Subjects is a list
  };

  handleClickExam = (event) => {
    // this.setState()
    console.log(event.target.id);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${event.target.id}`)
      .then((res) => {
        const testTypes = res.data;
        console.log(testTypes);
        this.setState({ testTypes });
      });
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users/`).then((res) => {
      const exams = res.data;
      console.log(exams);
      this.setState({ exams });
    });
    // handleClickSubject = () => {
    //   axios.get()
    // }
  }

  render() {
    return (
      <ul style={{ margin: "70px" }}>
        {this.state.exams.map((exam) => (
          <li id={exam.id} onClick={this.handleClickExam}>
            {exam.name}
          </li>
        ))}
        {(this.state.testTypes != {}) &
          this.state.testTypes.map((type) => (
            <li id={type.id}>
              {type.name}
              {type.username}
            </li>
          ))}
      </ul>
    );
  }
}

//onClick={this.handleClickSubject}
//            <li id={type.id} onClick={this.handleClickExam}>
