import React from "react";
import logo from "../../images/Resillience-Logo.png";
import HomePage from "../../images/NewHomeFinal.svg";
import rectangle from "../../images/Rectangle.png";
import Counselling from "../../components/Navbar/Counselling";

function LandingPage() {
  return (
    <div>
      <section style={{ position: "relative", marginTop: "40px" }}>
        <img className="home-image" src={HomePage} alt="Home Page Main" />
        <div className="content">
          <img src={logo} className="logo-image p-20" alt="Logo" />
          <h1 className="personalized p-20">Personalized</h1>
          <h2 className="learning p-20">learning with IITians</h2>
          <div>
            <img
              alt="Bg Design"
              className="p-20"
              src={rectangle}
              style={{
                zIndex: "-1",
                marginTop: "290px",
                marginLeft: "445px",
                top: "0",
                position: "absolute"
              }}
            />
            {/* <h2 className="iitians p-20">IITians</h2> */}
          </div>
          <p className="first-line p-20">
            with a single goal to provide perfect and result oriented
          </p>
          <p className="second-line p-20">solution for IIT/NEET preperation</p>
          <Counselling />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
