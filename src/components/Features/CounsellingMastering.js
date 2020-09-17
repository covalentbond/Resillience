import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CounsellingImageNew from "../../compressed/counsellingNew.svg";
import CounsellingImageNewPhone from "../../compressed/counsellingNewPhone.svg";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
// import Tick from "../../compressed/tick.svg";
// import mentoringStroke from "../../compressed/mentoringStroke.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  counselling: {
    marginTop: "20px",
    margin: "auto",
    "@media only screen and (max-width: 770px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1rem !important"
    }
  },
  blueImage: {
    width: "380px",
    cursor: "pointer",
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
    letterSpacing: "1px",
    fontSize: "1.2rem",
    marginTop: "-77px",
    marginLeft: "55px",
    cursor: "pointer",
    "@media only screen and (max-width: 770px)": {
      width: "auto",
      marginTop: "-20.5%",
      marginLeft: "0px"
    }
  },
  getFree: {
    marginTop: "0px",
    marginBottom: "0px",
    "@media only screen and (max-width: 770px)": {
      fontSize: "90%",
      marginTop: "0px",
      marginBottom: "initial"
    },
    "@media only screen and (max-width: 670px)": {
      fontSize: "115%"
    }
  },
  mentroingSession: {
    marginBottom: "20px",
    marginTop: "12px",
    "@media only screen and (max-width: 770px)": {
      fontSize: "90%"
    },
    "@media only screen and (max-width: 670px)": {
      marginBottom: "10px",
      fontSize: "115%"
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
      top: "20%"
    },
    "@media only screen and (max-width: 670px)": {
      top: "10%",
      fontSize: "8px !important",
      left: "10%"
    }
  },
  imageWeb: {
    visibility: "initial",
    "@media only screen and (max-width: 670px)": {
      display: "none",
      height: "300px"
    }
  },
  image: {
    visibility: "initial",
    display: "none",
    "@media only screen and (max-width: 670px)": {
      height: "300px",
      display: "initial"
    }
  },
  // image: {
  //   visibility: "initial",
  //   "@media only screen and (min-width: 770px)": {
  //     height: "300px",
  //     display: "none"
  //   }
  // },
  subSection: {
    position: "relative",
    height: "30px",
    width: "280px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    border: "1px solid",
    borderRadius: "8px",
    "@media only screen and (max-width: 770px)": {
      width: "auto",
      height: "auto"
    }
  },
  icons: {
    marginLeft: "5%"
  },
  inputPhone: {
    paddingLeft: "65px",
    borderTopStyle: "hidden",
    borderRightStyle: "hidden",
    borderLeftStyle: "hidden",
    borderBottomStyle: "hidden",
    "@media only screen and (max-width: 670px)": {
      fontSize: "10px",
      width: "110px",
      paddingLeft: "6%"
    }
  },
  messages: {
    marginLeft: "30px",
    marginTop: "25px",
    "@media only screen and (max-width: 670px)": {
      marginLeft: "0px",
      marginTop: "0px",
      fontSize: "10px",
      paddingTop: "9%",
      width: "160%"
    }
  },
  message: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px"
  },
  tickImage: {
    "@media only screen and (max-width: 770px)": {
      width: "13px"
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

  return (
    <div className={classes.counselling}>
      <span onClick={handleClickOpen}>
        <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243284/Assets/images/mentoringStroke_doj1ve.svg" alt="Stroke" className={classes.blueImage} />
        <h1 className={classes.heading}>Book a Mentoring Session</h1>
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
        {/* <img alt="Counselling" src="https://res.cloudinary.com/rweb1/image/upload/v1600243280/Assets/images/counsellingNew_vrn64m.svg" className={classes.image} /> */}
        <img alt="Counselling" src={CounsellingImageNew} className={classes.imageWeb} />
        <img alt="Counselling" src={CounsellingImageNewPhone} className={classes.image} />
        <div className={classes.section}>
          <h2 className={classes.getFree}>Get a Free Demo</h2>
          <h2 className={classes.mentroingSession}>Cum Mentoring Session</h2>
          <div className={classes.subSection}>
            <PersonOutlineIcon color="secondary" className={classes.icons} />
            <input type="text" name="parentName" id="parentName" className={`form-control ${classes.inputPhone}`} placeholder="Parent's Name" autoComplete="off" maxLength="15" required="required" />
          </div>
          <div className={classes.subSection} style={{ marginTop: "10px" }}>
            <PhoneInTalkIcon color="secondary" className={classes.icons} />
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
            {["Identify strengths and weaknesses", "Recommends a study plan for you", "One to One home/online tuition", "Mastering a weak topic"].map((message, index) => (
              <div className={classes.message} key={index}>
                <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243272/Assets/images/tick_nz85rm.svg" alt="tick" className={classes.tickImage} />
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
