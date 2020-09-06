import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import BetterLearningImageWeb from "../../images/better_learning_illustration_web.png";
import BetterLearningImagePhone from "../../images/BetterLearningImagePhone.png";

const styles = () => ({
  BetterLearningSection: {
    position: "relative",
    // height: "100vh",
    height: "900px",
    width: "1036px",
    margin: "0 auto",
    // marginTop: "72px",
    marginTop: "25%",
    "@media only screen and (max-width: 767px)": {
      width: "320px",
      marginTop: "25%"
    }
  },
  BetterLearningImageWeb: {
    // height: "130vh",
    textAlign: "right",
    position: "absolute",
    marginLeft: "392px",
    marginTop: "10px",
    height: "877px",
    "@media only screen and (max-width: 767px)": {
      display: "none"
    }
  },
  BetterLearningImagePhone: {
    // height: "130vh",
    textAlign: "right",
    position: "absolute",
    marginLeft: "35px",
    marginTop: "0",
    height: "auto",
    width: "250px",
    "@media only screen and (min-width: 767px)": {
      display: "none"
    }
  },
  LearningBody: {
    position: "relative",
    display: "flex",
    height: "163px",
    "@media only screen and (max-width: 767px)": {
      height: "165px"
    }
  },
  DescriptionItem: {
    width: "360px",
    textAlign: "right",
    "@media only screen and (max-width: 767px)": {
      width: "204px",
      textAlign: "left"
    }
  },
  DescriptionItemR: {
    width: "360px",
    textAlign: "left",
    marginLeft: "auto",
    "@media only screen and (max-width: 767px)": {
      width: "204px"
    }
  },

  Title: {
    fontWeight: "700",
    fontSize: "24px",
    color: "#000",
    letterSpacing: "-.5px",
    lineHeight: "36px",
    "@media only screen and (max-width: 767px)": {
      fontSize: "14px",
      lineHeight: "21px"
    }
  },
  Content: {
    opacity: ".5",
    fontSize: "14px",
    color: "#000",
    lineHeight: "24px",
    marginTop: "5px",
    "@media only screen and (max-width: 767px)": {
      fontSize: "12px",
      lineHeight: "18px"
    }
  }
});

function BetterLearning(props) {
  const { classes } = props;
  return (
    <section className={classes.BetterLearningSection}>
      <Typography
        variant="h3"
        color="primary"
        style={{ margin: "5%", textAlign: "center", letterSpacing: "-1px" }}
      >
        Our approach to better learning
      </Typography>
      <img
        src={BetterLearningImageWeb}
        className={classes.BetterLearningImageWeb}
        alt="Better Learning Path"
      />
      <img
        src={BetterLearningImagePhone}
        className={classes.BetterLearningImagePhone}
        alt="Better Learning Path"
      />
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItem}>
          <div className={classes.Title}>
            We believe that every student is unique
          </div>
          <div className={classes.Content}>
            We believe that every student learns differently and we work towards
            helping them learn better.
          </div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItemR}>
          <div className={classes.Title}>
            They learn better with individual learning paths
          </div>
          <div className={classes.Content}>
            We use adaptive algorithms to create individual learning paths that
            improve the unique strengths and weaknesses of each student
          </div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItem}>
          <div className={classes.Title}>
            They get their doubts solved instantly, 24x7
          </div>
          <div className={classes.Content}>
            Even if its the middle of the night, students can chat with experts to
            get their doubts solved instantly.
          </div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItemR}>
          <div className={classes.Title}>
            They learn with live videos, concepts, tests and stories for free
          </div>
          <div className={classes.Content}>
            Whether they want to start a new chapter or revise an old one, students
            learn at their own pace.
          </div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItem}>
          <div className={classes.Title}>
            Students experience all round academic growth
          </div>
          <div className={classes.Content}>
            Our teachers work seamlessly to boost every student’s all-round academic
            growth, helping them learn better.
          </div>
        </div>
      </div>
    </section>
  );
}

export default withStyles(styles)(BetterLearning);
