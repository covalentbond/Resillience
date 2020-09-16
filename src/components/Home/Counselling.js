import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CounsellingImageNew from "../../compressed/counsellingNew.svg";
import CounsellingImageNewPhone from "../../compressed/counsellingNewPhone.svg";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MessageIcon from "@material-ui/icons/Message";
// import Tick from "../../compressed/tick.svg";
// import mentoringStroke from "../../compressed/mentoringStroke.svg";
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
    "@media only screen and (max-width: 900px)": {
      marginTop: "-16px"
    },
    "@media only screen and (max-width: 770px)": {
      position: "initial",
      marginTop: "0px"
    }
  },
  blueImage: {
    width: "340px",
    position: "absolute",
    zIndex: "-1",
    "@media only screen and (max-width: 1100px)": {
      width: "300px"
    },
    "@media only screen and (max-width: 950px)": {
      width: "250px"
    },
    "@media only screen and (max-width: 880px)": {
      width: "200px"
    },
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
    "@media only screen and (max-width: 1025px)": {
      fontSize: "1.35rem"
    },
    "@media only screen and (max-width: 950px)": {
      fontSize: "1.25rem",
      marginTop: "20px",
      marginLeft: "35px"
    },
    "@media only screen and (max-width: 880px)": {
      fontSize: "1rem",
      marginLeft: "28px"
    },
    "@media only screen and (max-width: 770px)": {
      width: "auto",
      marginTop: "-21.5%",
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
    // justifyContent: "space-around",
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
  const [open, setOpen] = useState(false);
  const [parent, setParent] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const SendOtp = () => {
    fetch(`/sendotp?phonenumber=+91${phone}&channel=sms`, {
      method: "get"
    })
      .then((res) => res.json())
      .then((message) => {
        console.log(message);
        if (message.error) {
          console.log(message.error);
        } else {
          console.log(message.message);
        }
      });
  };
  const VerifyOtp = () => {
    fetch(`/verify?phonenumber=+91${phone}&code=${otp}`, {
      method: "get"
    })
      .then((res) => res.json())
      .then((message) => {
        console.log(message);
        if (message.error) {
          console.log(message.error);
        } else {
          console.log(message.message);
        }
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 30000);
  }, []);

  return (
    <div className={classes.counselling}>
      <span onClick={handleClickOpen} className={classes.designedText}>
        <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243284/Assets/images/mentoringStroke_doj1ve.svg" alt="Stroke" className={classes.blueImage} />
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
        {/* <img alt="Counselling" src="https://res.cloudinary.com/rweb1/image/upload/v1600243280/Assets/images/counsellingNew_vrn64m.svg" className={classes.image} /> */}
        <img alt="Counselling" src={CounsellingImageNew} className={classes.imageWeb} />
        <img alt="Counselling" src={CounsellingImageNewPhone} className={classes.image} />
        <div className={classes.section}>
          <h2 className={classes.getFree}>GET A FREE DEMO</h2>
          <h2 className={classes.mentroingSession}>CUM MENTORING SESSION</h2>

          {/* TODO: */}
          {/* <div className={classes.subSection}>
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={classes.messages}>
            {["Identify strengths & weaknesses", "Recommends a study plan", "One to One home/online tuition", "Mastering a weak topic"].map((message, index) => (
              <div className={classes.message} key={index}>
                <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243272/Assets/images/tick_nz85rm.svg" alt="tick" className={classes.tickImage} />
                <h4 style={{ margin: "auto", marginLeft: "10px" }}>{message}</h4>
              </div>
            ))}
          </div>
          <Button variant="contained" color="secondary" disableElevation className={classes.button} size="small" onClick={() => SendOtp()}>
            Proceed
          </Button> */}

          {/* TODO: */}

          {/* <form noValidate onSubmit={VerifyOtp}>
            <div className={classes.messages}>
              <div className={classes.message}>
                <h2 style={{ margin: "auto", marginTop: "20px" }}>Login with OTP</h2>
              </div>
              <div className={classes.message}>
                <h3 style={{ margin: "auto", marginLeft: "10px" }}>We have sent an SMS with OTP to</h3>
              </div>
            </div>
            <div className={classes.subSection} style={{ marginTop: "10px" }}>
              <MessageIcon color="secondary" className={classes.icons} />
              <input
                type="tel"
                name="otp"
                id="verifyotp"
                className={`form-control ${classes.inputPhone}`}
                placeholder="Enter OTP"
                autoComplete="off"
                maxLength="4"
                required="required"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <Button type="submit" variant="contained" color="secondary" disableElevation className={classes.button} size="small" onClick={() => VerifyOtp()}>
              Verify
            </Button>
          </form> */}
        </div>
      </Dialog>
    </div>
  );
}

export default Counselling;
