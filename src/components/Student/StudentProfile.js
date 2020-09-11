import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexWrap: "wrap",
    margin: "5%",
    marginTop: "5%",
    marginBottom: "-10%",
    // marginLeft:"15%",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(104),
      height: theme.spacing(73)
    }
  },
  pic: {
    display: "flex",
    marginLeft: "18%",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(14),
      height: theme.spacing(15)
    }
  },
  paper: {
    marginLeft: "2%",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  textbox: {
    marginLeft: "26%",
    marginTop: "5%"
  }
}));

const options = ["test1", "test2"];

export default function SimplePaper() {
  const classes = useStyles();
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className={classes.card}>
      <Paper elevation={5}>
        <div>
          <div className={classes.pic}>
            <Avatar alt="Student" src="https://res.cloudinary.com/rweb1/image/upload/v1599639734/resilience_default_lqmb3p.png" />
            <div className={classes.textbox}>
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                style={{ width: 350 }}
                renderInput={(params) => <TextField {...params} label="Enter test ID" variant="outlined" />}
              />
            </div>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={10} sm={6}>
                <Paper className={classes.paper}>Name : Apurv Gupta</Paper>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={10} sm={6}>
                <Paper className={classes.paper}>Email : qwes@habd.in</Paper>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={10} sm={6}>
                <Paper className={classes.paper}>Batch : 2020-21</Paper>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={10} sm={6}>
                <Paper className={classes.paper}>Contact : 2637846287</Paper>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={10} sm={6}>
                <Paper className={classes.paper}>Fathers Name : Praveen Gupta</Paper>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={10} sm={6}>
                <Paper className={classes.paper}>Parents Contact : 8794156452</Paper>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={10} sm={6}>
                <Paper className={classes.paper}>Address : 123 xyz</Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </Paper>
    </div>
  );
}
