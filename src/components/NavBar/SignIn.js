import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import SignInImage from "../../images/SignIn.svg";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
  signIn: {
    marginBottom: "5%"
  },
  textField: {
    marginTop: "2%",
    marginBottom: "4%",
    fontFamily: "muli"
  }
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      open: false
    };
  }

  handleChange = (event) => {
    // const { name, value } = event.target

    // const value = event.target.value;
    // const name = event.target.name;

    // this.setState({ [name]: value })
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div style={{ fontStyle: "23px" }}>
        <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
          Sign In
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="lg"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div
            style={{ display: "flex", flexDirection: "row", borderRadius: "100px" }}
          >
            <img src={SignInImage} />
            <div style={{ display: "flex", flexDirection: "column", padding: "5%" }}>
              <Typography variant="h4" color="primary" className={classes.signIn}>
                Sign In
              </Typography>
              <form noValidate onSubmit={this.handleSubmit}>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange}
                  autoComplete="off"
                  fullWidth
                />
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  className={classes.textField}
                  value={this.state.password}
                  onChange={this.handleChange}
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Login
                </Button>
                <br />
              </form>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(SignIn);
