import React from "react";

import LandingPage from "./HomeLandingPage";
import HomeFeatures from "./Home-Features";
import BetterLearning from "./BetterLearning";
import Milestones from "./Milestones";
import Videos from "./Videos";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div
      className="page"
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <LandingPage />
      <BetterLearning />
      <HomeFeatures />
      <Milestones />
      <Videos />
      <Testimonials />
    </div>
  );
}
