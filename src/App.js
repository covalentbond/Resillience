import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import axios from "axios";

//MUI
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeObject from "./theme";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./ReactTransitions.css";

//Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Blogs from "./components/Blogs";
import Features from "./components/Features/Features";
import Faqs from "./components/Faqs";
import Career from "./components/Navbar/Career";
import Tests from "./components/Tests";
import Room from "./components/Room";
import Footer from "./components/Home/Footer";
import Error from "./components/Error";

const theme = createMuiTheme(themeObject);

axios.defaults.baseURL = "http://localhost:5000";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevDepth: this.getPathDepth(this.props.location)
    };
  }

  UNSAFE_componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter((n) => n !== "");
    return pathArr.length;
  }

  render() {
    const { location } = this.props;

    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 800, exit: 800 };

    return (
      <MuiThemeProvider theme={theme}>
        <TransitionGroup component="div" className="App">
          <CSSTransition
            key={currentKey}
            timeout={timeout}
            classNames="pageSlider"
            mountOnEnter={false}
            unmountOnExit={true}
          >
            <div
              className={
                this.getPathDepth(location) - this.state.prevDepth >= 0
                  ? "left" //left means right to left
                  : "right" //right means towards right
              }
            >
              <Navbar />
              <ScrollToTop />
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutUs} />
                <Route path="/features" component={Features} />
                <Route path="/faqs" component={Faqs} />
                <Route path="/blogs" component={Blogs} />
                <Route path="/career" component={Career} />
                <Route path="/tests" component={Tests} />
                <Route path="/room" component={Room} />
                <Route component={Error} />
              </Switch>
              <Footer />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);

// theme.typography.h3 = {
//   "@media (max-width:767px)": {
//     fontSize: "2rem"
//   }
// };

// theme.typography.body1 = {
//   fontSize: '1.2rem',

//   [theme.breakpoints.up('md')]: {
//     fontSize: '2rem',
//   },
// };
