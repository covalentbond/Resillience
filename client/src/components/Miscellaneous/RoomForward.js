// import React, { useEffect } from "react";
// import { Redirect } from "react-router-dom";

// function RoomForward() {
//   return <Redirect to="localhost:5000/room" />;
// }

// export default RoomForward;
import React, { Component } from "react";

export class RoomForward extends Component {
  componentDidMount = () => {
    window.location.href = "http://localhost:5000/room";
  };
  render() {
    return <div></div>;
  }
}

export default RoomForward;
