import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import LandingPage from "./LandingPage";
import HomeFeatures from "./Home-Features";
import BetterLearning from "./BetterLearning";
import Faqs from "./Faqs";
import Milestones from "./Milestones";
import Videos from "./Videos";
import Testimonials from "./Testimonials";

const useStyles = makeStyles({});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <LandingPage />
      <BetterLearning />
      <HomeFeatures />
      <Milestones />
      <Faqs />
      <Videos />
      <Testimonials />
      {/* <Mission /> */}
    </div>
  );
}
