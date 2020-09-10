import React, { Component, Suspense, lazy } from "react";

import { Switch, Route, withRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
// import jwtDecode from "jwt-decode";
// import axios from "axios";

//MUI
import LinearProgress from "@material-ui/core/LinearProgress";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeObject from "./theme";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./ReactTransitions.css";

//Components
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Home = lazy(() => import("./components/Home/Home"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const Features = lazy(() => import("./components/Features/Features"));
const Faqs = lazy(() => import("./components/Faqs"));
const Tests = lazy(() => import("./components/Tests"));
const Room = lazy(() => import("./components/Room"));
const Footer = lazy(() => import("./components/Home/Footer"));
const Error = lazy(() => import("./components/Error"));
const Blog = lazy(() => import("./components/Blogs/Blogs"));
const ShowBlogs = lazy(() => import("./components/Blogs/ShowBlogs"));
// const SampleBlog = lazy(() => import("./components/Blogs/SampleBlog"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const Career = lazy(() => import("./components/Career/Career"));

const theme = createMuiTheme(themeObject);

//Proxy only works in developmemt so need to tell this
// axios.defaults.baseURL =
//   "https://us-central1-social-media-app-132cc.cloudfunctions.net/api";

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
        <Suspense fallback={<LinearProgress color="secondary" style={{ paddingTop: "0.2%" }} />}>
          <TransitionGroup component="div" className="App">
            <CSSTransition key={currentKey} timeout={timeout} classNames="pageSlider" mountOnEnter={false} unmountOnExit={true}>
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
                  <Route path="/about-us" component={AboutUs} />
                  <Route path="/features" component={Features} />
                  <Route path="/faqs" component={Faqs} />
                  <Route path="/tests" component={Tests} />
                  <Route path="/room" component={Room} />
                  <Route path="/contact-us" component={ContactUs} />
                  <Route path="/career" component={Career} />
                  <Route path="/admin/createblogs" component={Blog} />
                  <Route path="/blogs" component={ShowBlogs} />
                  <Route component={Error} />
                </Switch>
                <Footer />
              </div>
            </CSSTransition>
          </TransitionGroup>
        </Suspense>
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
