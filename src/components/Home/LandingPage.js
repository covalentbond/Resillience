import React from "react";
import logo from "../../images/Resillience-Logo.png";
import HomePage from "../../images/NewHomeFinal.svg";
import rectangle from "../../images/Rectangle.png";

function LandingPage() {
  return (
    <div>
      <section style={{ position: "relative" }}>
        <img className="home-image" src={HomePage} alt="homepagemain" />
        <div className="content">
          <img src={logo} className="logo-image p-20" />
          <h1 className="personalized p-20">Personalized</h1>
          <h2 className="learning p-20">learning with</h2>
          <div>
            <img
              className="p-20"
              src={rectangle}
              style={{ marginTop: "350px", top: "0", position: "absolute" }}
            />
            <h2 className="iitians p-20">IITians</h2>
          </div>
          <p className="first-line p-20">
            with a single goal to provide perfect and result oriented
          </p>
          <p className="second-line p-20">solution for IIT/NEET preperation</p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
