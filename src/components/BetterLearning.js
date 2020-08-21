import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import BetterLearningImage from "../images/better_learning_illustration.png";

const styles = () => ({
  BetterLearningSection: {
    position: "relative",
    // height: "100vh",
    height: "900px",
    width: "1036px",
    margin: "0 auto",
    position: "relative",
    marginTop: "72px"
  },
  BetterLearningImage: {
    // height: "130vh",
    textAlign: "right",
    position: "absolute",
    marginLeft: "392px",
    marginTop: "10px",
    height: "877px"
  },
  LearningBody: {
    position: "relative",
    display: "flex",
    height: "163px"
  },
  DescriptionItem: {
    width: "360px",
    textAlign: "right"
  },
  DescriptionItemR: {
    width: "360px",
    textAlign: "left",
    marginLeft: "auto"
  },

  Title: {
    fontWeight: "700",
    fontSize: "24px",
    color: "#000",
    letterSpacing: "-.5px",
    lineHeight: "36px"
  },
  Content: {
    opacity: ".5",
    fontSize: "14px",
    color: "#000",
    lineHeight: "24px",
    marginTop: "5px"
  }
});

function BetterLearning(props) {
  const { classes } = props;
  return (
    <section className={classes.BetterLearningSection}>
      <Typography
        variant="h3"
        color="primary"
        style={{ margin: "5%", textAlign: "center" }}
      >
        Our approach to better learning
      </Typography>
      <img src={BetterLearningImage} className={classes.BetterLearningImage} />
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
            They learn with videos, concepts, tests and stories for free
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
            Our four modules work seamlessly to boost every student’s all-round
            academic growth, helping them learn better.
          </div>
        </div>
      </div>
    </section>
  );
}

export default withStyles(styles)(BetterLearning);
