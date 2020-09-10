import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

// import BetterLearningImageWeb from "../../images/better_learning_illustration_web.png";
import BetterLearningChanges from "../../images/betterLearningChanges.svg";

import BetterLearningImagePhone from "../../images/BetterLearningImagePhone.png";

const styles = () => ({
  BetterLearningSection: {
    position: "relative",
    // height: "100vh",
    height: "1200px",
    width: "1036px",
    margin: "0 auto",
    // marginTop: "72px",
    marginTop: "25%",
    "@media only screen and (max-width: 770px)": {
      width: "320px",
      marginTop: "25%"
    }
  },
  BetterLearningImageWeb: {
    // height: "130vh",
    textAlign: "right",
    position: "absolute",
    marginLeft: "360px",
    // marginTop: "10px",
    height: "1222px",
    "@media only screen and (max-width: 770px)": {
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
    "@media only screen and (min-width: 770px)": {
      display: "none"
    }
  },
  LearningBody: {
    position: "relative",
    display: "flex",
    height: "163px",
    "@media only screen and (max-width: 770px)": {
      height: "165px"
    }
  },
  DescriptionItem: {
    width: "360px",
    textAlign: "right",
    "@media only screen and (max-width: 770px)": {
      width: "204px",
      textAlign: "left"
    }
  },
  DescriptionItemR: {
    width: "360px",
    textAlign: "left",
    marginLeft: "auto",
    "@media only screen and (max-width: 770px)": {
      width: "204px"
    }
  },

  Title: {
    fontWeight: "700",
    fontSize: "24px",
    color: "#000",
    letterSpacing: "-.5px",
    lineHeight: "36px",
    "@media only screen and (max-width: 770px)": {
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
    "@media only screen and (max-width: 770px)": {
      fontSize: "12px",
      lineHeight: "18px"
    }
  }
});

function BetterLearning(props) {
  const { classes } = props;
  return (
    <section className={classes.BetterLearningSection}>
      <Typography variant="h3" color="primary" style={{ margin: "5%", textAlign: "center", letterSpacing: "-1px" }}>
        Why RESILLIENCE ?
      </Typography>
      <img src={BetterLearningChanges} className={classes.BetterLearningImageWeb} alt="Better Learning Path" />
      <img src={BetterLearningImagePhone} className={classes.BetterLearningImagePhone} alt="Better Learning Path" />
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItem}>
          <div className={classes.Title}>Personalized learning with IIT graduate faculty</div>
          <div className={classes.Content}>Students prepares under individual attention of very assionate and empathetic IITians. The path of learning depends on the student.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItemR}>
          <div className={classes.Title}>Flexible class timings</div>
          <div className={classes.Content}>Students can choose the session timing as per their convenience.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItem}>
          <div className={classes.Title}>Doubt solving on chat and call by the same teacher</div>
          <div className={classes.Content}>Students are always connected to their teachers, they can ask whenever they are stuck.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItemR}>
          <div className={classes.Title}>Regular personalized tests and analysis</div>
          <div className={classes.Content}>Personalized tests are taken and the analysis is done with the student in class only.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItem}>
          <div className={classes.Title}>Training on exam strategy and smart ties</div>
          <div className={classes.Content}>Student learn how to attempt any paper with smart approach to maximize the score under any condition.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItemR}>
          <div className={classes.Title}>Regular insights to parents</div>
          <div className={classes.Content}>Parents are generally updated on daily progress of the student. They can reach the teacher any time.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItem}>
          <div className={classes.Title}>Students experience all round academic growth</div>
          <div className={classes.Content}>Our teachers work seamlessly to boost every student’s all-round academic growth, helping them learn better.</div>
        </div>
      </div>
    </section>
  );
}

export default withStyles(styles)(BetterLearning);
