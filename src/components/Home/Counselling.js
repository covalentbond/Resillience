import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CounsellingImage from "../../images/counselling.png";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import Tick from "../../images/tick.svg";
import mentoringStroke from "../../images/mentoringStroke.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  counselling: {
    display: "inline",
    "@media only screen and (max-width: 770px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1rem !important"
    }
  },
  designedText: {
    position: "absolute",
    marginTop: "-25px",
    "@media only screen and (max-width: 770px)": {
      position: "initial",
      marginTop: "0px"
    }
  },
  blueImage: {
    width: "340px",
    position: "absolute",
    zIndex: "-1",
    "@media only screen and (max-width: 770px)": {
      position: "initial",
      marginTop: "-10px"
    }
  },
  paper: {
    backgroundColor: "transparent",
    maxWidth: "753px"
  },
  heading: {
    letterSpacing: "0.5px",
    fontSize: "1.7rem",
    color: "black",
    width: "260px",
    marginLeft: "42px",
    marginTop: "27px",
    cursor: "pointer",
    "@media only screen and (max-width: 770px)": {
      width: "auto",
      marginTop: "-19%",
      marginLeft: "0px"
    }
  },
  getFree: {
    "@media only screen and (max-width: 770px)": {
      marginTop: "0px"
    }
  },
  section: {
    position: "absolute",
    top: "14%",
    left: "12%",
    right: "40%",
    bottom: "10%",
    textAlign: "center",
    "@media only screen and (max-width: 770px)": {
      top: "10%",
      fontSize: "8px !important"
    }
  },
  image: {
    visibility: "initial",
    "@media only screen and (max-width: 770px)": {
      height: "300px"
    }
  },
  subSection: {
    position: "relative",
    height: "30px",
    width: "280px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-around",
    border: "1px solid",
    borderRadius: "8px",
    "@media only screen and (max-width: 770px)": {
      width: "auto",
      height: "auto"
    }
  },
  inputPhone: {
    paddingLeft: "75px",
    borderTopStyle: "hidden",
    borderRightStyle: "hidden",
    borderLeftStyle: "hidden",
    borderBottomStyle: "hidden",
    "@media only screen and (max-width: 770px)": {
      width: "127px",
      paddingLeft: "6%"
    }
  },
  messages: {
    marginLeft: "30px",
    marginTop: "30px",
    "@media only screen and (max-width: 770px)": {
      marginLeft: "0px",
      marginTop: "0px",
      fontSize: "12px",
      paddingTop: "9%"
    }
  },
  message: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px"
  },
  tickImage: {
    "@media only screen and (max-width: 770px)": {
      width: "18px"
    }
  },
  button: {
    marginTop: "15px",
    "@media only screen and (max-width: 770px)": {
      marginTop: "0px"
    }
  }
});

function Counselling() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 20000);
  }, []);

  return (
    <div className={classes.counselling}>
      <span onClick={handleClickOpen} className={classes.designedText}>
        <img src={mentoringStroke} alt="Stroke" className={classes.blueImage} />
        <h1 className={classes.heading}>Mentoring Session</h1>
      </span>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        classes={{
          paper: classes.paper
        }}
      >
        <img alt="Counselling" src={CounsellingImage} className={classes.image} />
        <div className={classes.section}>
          <h2 className={classes.getFree}>GET FREE</h2>
          <h2>MENTOR COUNSELLING</h2>
          <div className={classes.subSection}>
            <PhoneInTalkIcon color="secondary" />
            <input
              type="tel"
              name="number"
              id="mobileNumber"
              className={`form-control ${classes.inputPhone}`}
              placeholder="Enter Mobile number"
              autoComplete="off"
              maxLength="10"
              required="required"
            />
          </div>

          <div className={classes.messages}>
            {["Identify strengths and weaknesses", "Create a study plan for you", "Recommend Solutions", "Regular updates of students"].map((message, index) => (
              <div className={classes.message} key={index}>
                <img src={Tick} alt="tick" className={classes.tickImage} />
                <h4 style={{ margin: "auto", marginLeft: "10px" }}>{message}</h4>
              </div>
            ))}
          </div>
          <Button variant="contained" color="secondary" disableElevation className={classes.button}>
            Proceed
          </Button>
        </div>
      </Dialog>
    </div>
  );
}

export default Counselling;
