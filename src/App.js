import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//MUI
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeObject from "./theme";

//Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import Features from "./components/Features";
import Career from "./components/Navbar/Career";
import Tests from "./components/Tests";
import Room from "./components/Room";

const theme = createMuiTheme(themeObject);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={AboutUs} />
              <Route path="/features" component={Features} />
              <Route path="/blogs" component={Blogs} />
              <Route path="/career" component={Career} />
              <Route path="/tests" component={Tests} />
              <Route path="/room" component={Room} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
