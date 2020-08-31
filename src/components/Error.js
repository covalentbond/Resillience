import React from "react";
import Typography from "@material-ui/core/Typography";

//Images
import ErrorPage from "../images/404Page.svg";

function Error() {
  return (
    <div>
      <br></br>
      <Typography
        variant="h4"
        color="primary"
        alt="Error 404 Image"
        style={{ position: "absolute", marginTop: "8%", marginLeft: "16%" }}
      >
        Page not found
      </Typography>
      <img src={ErrorPage} style={{ height: "100vh", width: "98vw" }} />
    </div>
  );
}

export default Error;
