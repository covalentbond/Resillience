import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/Resillience-Logo.png";
import HomePage from "../images/NewHomeFinal.svg";
import HomeFeatures from "./Home-Features";
import BetterLearning from "./BetterLearning";
import Faqs from "./Faqs";
import Milestones from "./Milestones";
import Testimonials from "./Testimonials";

const useStyles = makeStyles({});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <section>
        <div className="landing-section">
          <img src={logo} className="logo-image" />
          <h1 className="personalized">Personalized</h1>
          <h2 className="learning">learning with</h2>
          <h2 className="iitians">IITians</h2>
          <p className="first-line">
            with a single goal to provide perfect and result
          </p>
          <p className="second-line">oriented solution for IIT/NEET preperation</p>
        </div>
        <img
          className="home-image"
          style={{ height: "110vh", right: "0", marginLeft: "42%" }}
          src={HomePage}
          alt="homepagemain"
        />
      </section>
      <BetterLearning />
      <HomeFeatures />
      <Faqs />
      <Milestones />
      <Testimonials />
      {/* <Mission /> */}
    </div>
  );
}
