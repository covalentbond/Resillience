import React from "react";

//Components
import LandingPage from "./AboutLandingPage";
import Vision from "./Vision";

function AboutUs() {
  return (
    <div
      style={{
        marginTop: "10%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <LandingPage />
      <Vision />
      <Vision />
    </div>
  );
}

export default AboutUs;
