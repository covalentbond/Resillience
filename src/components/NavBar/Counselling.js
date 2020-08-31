import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CounsellingImage from "../../images/counselling.png";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import Tick from "../../images/tick.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "transparent",
    maxWidth: "753px"
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
      <Button
        variant="contained"
        color="#EE2B2F"
        style={{
          letterSpacing: "0.5px",
          lineHeight: "1.5",
          fontSize: "1.2rem",
          borderRadius: "20px",
          color: "black"
        }}
        onClick={handleClickOpen}
      >
        Demo cum Mentoring Session
      </Button>
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
        <img src={CounsellingImage} style={{ visibility: "initial" }}></img>

        <div
          style={{
            position: "absolute",
            top: "14%",
            left: "12%",
            right: "40%",
            bottom: "10%",
            textAlign: "center"
          }}
        >
          <h2>GET FREE</h2>
          <h2>MENTOR COUNSELLING</h2>
          <div
            style={{
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
            }}
          >
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
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
            >
              <img src={Tick} alt="tick" />
              <h4 style={{ margin: "auto", marginLeft: "10px" }}>
                Identify strengths and weaknesses
              </h4>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
            >
              <img src={Tick} alt="tick" />
              <h4 style={{ margin: "auto", marginLeft: "10px" }}>
                Create a study plan for you
              </h4>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
            >
              <img src={Tick} alt="tick" />
              <h4 style={{ margin: "auto", marginLeft: "10px" }}>
                Recommend Solutions
              </h4>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
            >
              <img src={Tick} alt="tick" />
              <h4 style={{ margin: "auto", marginLeft: "10px" }}>
                Regular updates of students
              </h4>
            </div>
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
