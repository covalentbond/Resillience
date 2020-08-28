import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import LandingPage from "./LandingPage";
import HomeFeatures from "./Home-Features";
import BetterLearning from "./BetterLearning";
import Milestones from "./Milestones";
import Videos from "./Videos";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const useStyles = makeStyles({});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <LandingPage />
      <BetterLearning />
      {/* <div style={{ height: "100vh" }}></div> */}
      <HomeFeatures />
      <Milestones />
      <Videos />
      <Testimonials />
      <Footer />
      {/* <Mission /> */}
    </div>
  );
}
