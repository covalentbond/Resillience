import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

const styles = () => ({
  email: {
    marginTop: "5%",
    marginBottom: "5%"
  },
  formButtons: {
    display: "flex",
    justifyContent: "space-between",
    width: "60%",
    marginTop: "3%"
  },
  autoSize: {
    marginTop: "2%",
    marginBottom: "1%",
    width: "98%",
    fontSize: "20px",
    fontFamily: "muli",
    paddingTop: "2%",
    padding: "1%"
  }
});

function Email(props) {
  const { classes } = props;
  return (
    <div className={classes.email}>
      <Typography variant="h4" style={{ marginBottom: "1%" }} color="secondary">
        Send Us Message
      </Typography>
      <Typography variant="inherit" className={classes.text} color="primary" style={{ marginTop: "10px" }}>
        We are here to help and answer any question you might have. We look forward hearing from you.
      </Typography>
      <form className={classes.form} noValidate>
        <div className={classes.formButtons}>
          <TextField id="outlined-basic" placeholder="Your Name" variant="outlined" color="secondary" />
          <TextField id="outlined-basic" placeholder="Your Email" variant="outlined" autoComplete="none" color="secondary" />
          <TextField id="outlined-basic" placeholder="Phone" variant="outlined" autoComplete="none" color="secondary" />
        </div>
        <TextareaAutosize aria-label="minimum height" rows={10} placeholder="Write your Message ..." className={classes.autoSize} />
        <Button variant="outlined" color="secondary" size="large">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default withStyles(styles)(Email);
