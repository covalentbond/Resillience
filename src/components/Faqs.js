import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";

//Images
import FAQS from "../images/faqs.svg";

const styles = () => ({
  root: {
    width: "70%",
    margin: "auto",
    background: "#d3d3d3",
    "@media only screen and (max-width: 767px)": {
      width: "90%"
    }
  },
  faqImage: {
    "@media only screen and (max-width: 767px)": {
      width: "75%"
    }
  },
  faqSection: {
    marginTop: "15vh",
    marginBottom: "10vh"
  },
  accordion: {
    padding: "8px 10px",
    "@media only screen and (max-width: 767px)": {
      padding: "0px"
    }
  },
  topHeading: {
    textAlign: "center",
    position: "relative"
  },
  q: {
    fontSize: "25px",
    opacity: "0.6",
    "@media only screen and (max-width: 767px)": {
      fontSize: "20px"
    }
  },
  big: {
    position: "absolute",
    top: "-15px",
    left: "0",
    right: "0",
    fontSize: "70px",
    color: "rgba(146, 143, 143, 0.37)",
    fontWeight: "900",
    letterSpacing: "1px"
  },
  qs: {
    paddingTop: "40px",
    fontWeight: "700",
    fontSize: "50px",
    color: "black",
    letterSpacing: "0"
  },
  answer: {
    fontSize: "18px",
    "@media only screen and (max-width: 768px)": {
      fontSize: "16px"
    }
  },
  heading: {
    fontSize: "1.2rem",
    flexShrink: 0,
    "@media only screen and (max-width:768px)": {
      fontSize: "1rem"
    }
  }
});

function Faqs(props) {
  const { classes } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={`page ${classes.faqSection}`}>
      <div className={classes.topHeading}>
        <Typography variant="h3" color="primary" className={classes.big}>
          F.A.Q
        </Typography>
        <h1 className={classes.qs}>Questions?</h1>
        <img alt="FAQ'S" src={FAQS} className={classes.faqImage}></img>
      </div>
      <div className={classes.root}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              How will we start?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="inherit" className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              For home tuition:
              <br />
              1. Call and get 'Mentoring session' with your IITian Mentor.
              <br />
              2. Based on requirement we will sit together and plan out the
              curriculum.
              <br />
              3. Meeting and finalization.
              <br />
              <br />
              For online classes:
              <br />
              1. Just call on the given number and send your enquiry we will get back
              to you.
              <br />
              2. We simply want to know your requirement and then we will figure out
              the customize plan
            </Typography>
            <Divider />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              Where do you work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="inherit" className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              Currently we are providing home tutition in Mumbai only, But the
              services can be availed anywhere through online live tuition at our
              platform.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              What is the Fee structure of the program?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="inherit" className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              The Fee structure will depend on the need and duration of the program.
              We will figure it out in the meeting.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              How much qualified the faculties are?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="inherit" className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              All the faculties are IIT graduates. They are expert in their subjects,
              experienced, passionate in teaching, motivating, understanding and
              friendly Mentors.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              How we work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="inherit" className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              1. Regular sessions as per student’s requirements. 2. Regular updates
              of sessions regarding Home Work and completion status of previous home
              Work. 3. Relevant and effective study materials will be suggested and
              followed. 4. Students can ask any doubt on chat, any time. 5. They get
              2-3 calls/ week from the mentor regarding regular progress and
              mentoring 6. For peer learning there are students groups under Sir’s
              guidance. 7. Computer based tests are conducted regularly and test
              analysis is personally done by the Mentor with students. 8. Regular
              Monthly meeting for Strength-Weakness analysis and deciding further
              course of action.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default withStyles(styles)(Faqs);
