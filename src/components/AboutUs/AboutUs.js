import React from "react";

//Components
import LandingPage from "./AboutLandingPage";
import Vision from "./Vision";
import Story from "./Story";

function AboutUs() {
  return (
    <div
      className="page"
      style={{
        marginTop: "10%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <LandingPage />
      <Vision />
      <Story />
    </div>
  );
}

export default AboutUs;
