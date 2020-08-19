import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomePage from "../images/Home1.svg";
import HomeFeatures from "./Home-Features";

const useStyles = makeStyles({});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <section>
        <img
          className="home-image"
          style={{ height: "120vh", right: "0", marginLeft: "38%" }}
          src={HomePage}
          alt="homepagemain"
        />
      </section>
      <HomeFeatures />
      {/* <Mission /> */}
    </div>
  );
}
