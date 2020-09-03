import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CounsellingImage from "../../images/counselling.png";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import Tick from "../../images/tick.svg";
import mentoringStroke from "../../images/mentoringStroke.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
    cursor: "pointer"
  },
  section: {
    position: "absolute",
    top: "14%",
    left: "12%",
    right: "40%",
    bottom: "10%",
    textAlign: "center"
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
    borderRadius: "8px"
  },
  message: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px"
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
    <div style={{ display: "inline" }}>
      <span onClick={handleClickOpen} style={{ top: "-18px", position: "absolute" }}>
        <img
          src={mentoringStroke}
          alt="Stroke"
          style={{
            width: "340px",
            position: "absolute",
            zIndex: "-1"
          }}
        />
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
        <img
          alt="Counselling"
          src={CounsellingImage}
          style={{ visibility: "initial" }}
        />
        <div className={classes.section}>
          <h2>GET FREE</h2>
          <h2>MENTOR COUNSELLING</h2>
          <div className={classes.subSection}>
            <PhoneInTalkIcon color="secondary" />
            <input
              type="tel"
              name="number"
              id="mobileNumber"
              className="form-control"
              placeholder="Enter Mobile number"
              autoComplete="off"
              maxLength="10"
              required="required"
              style={{
                paddingLeft: "75px",
                borderTopStyle: "hidden",
                borderRightStyle: "hidden",
                borderLeftStyle: "hidden",
                borderBottomStyle: "hidden"
              }}
            />
          </div>

          <div style={{ marginLeft: "30px", marginTop: "30px" }}>
            {[
              "Identify strengths and weaknesses",
              "Create a study plan for you",
              "Recommend Solutions",
              "Regular updates of students"
            ].map((message, index) => (
              <div className={classes.message} key={index}>
                <img src={Tick} alt="tick" />
                <h4 style={{ margin: "auto", marginLeft: "10px" }}>{message}</h4>
              </div>
            ))}
          </div>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            style={{ marginTop: "15px" }}
          >
            Proceed
          </Button>
        </div>
      </Dialog>
    </div>
  );
}

export default Counselling;
