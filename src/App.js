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
import { TitleComponent } from "./components/Title/TitleComponent";

import "./ReactTransitions.css";

//Components
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Home = lazy(() => import("./components/Home/Home"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const Features = lazy(() => import("./components/Features/Features"));
const Faqs = lazy(() => import("./components/Faqs"));
const Footer = lazy(() => import("./components/Home/Footer"));
const Error = lazy(() => import("./components/Error"));
const PostBlog = lazy(() => import("./components/Blogs/Admin/PostBlogs"));
const ShowBlogs = lazy(() => import("./components/Blogs/ShowBlogs"));
const ParticularBlog = lazy(() => import("./components/Blogs/ParticularBlog/ParticularBlog"));
const StudentProfile = lazy(() => import("./components/Student/StudentProfile"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const Career = lazy(() => import("./components/Career/Career"));
// const Tests = lazy(() => import("./components/Tests"));
// const Room = lazy(() => import("./components/Room"));

const theme = createMuiTheme(themeObject);

//Proxy only works in developmemt so need to tell this
// axios.defaults.baseURL =
//   "https://us-central1-social-media-app-132cc.cloudfunctions.net/api";

// withTitle function
const withTitle = ({ component: Component, title }) => {
  return class Title extends React.Component {
    render() {
      return (
        <React.Fragment>
          <TitleComponent title={title} />
          <Component {...this.props} />
        </React.Fragment>
      );
    }
  };
};

// Adding title
const HomeComponent = withTitle({ component: Home, title: "RESILLIENCE: Personalized Learning with IITians" });
const AboutUsComponent = withTitle({ component: AboutUs, title: "About Us | RESILLIENCE" });
const FeaturesComponent = withTitle({ component: Features, title: "Features | RESILLIENCE" });
const FaqsComponent = withTitle({ component: Faqs, title: "FAQ's | RESILLIENCE" });
const ContactUsComponent = withTitle({ component: ContactUs, title: "Contact Us | RESILLIENCE" });
const CareerComponent = withTitle({ component: Career, title: "Career | RESILLIENCE" });
const PostBlogComponent = withTitle({ component: PostBlog, title: "Post Blog | RESILLIENCE" });
const ShowBlogsComponent = withTitle({ component: ShowBlogs, title: "Blogs | RESILLIENCE" });
const ParticularBlogComponent = withTitle({ component: ParticularBlog, title: "Blogs | RESILLIENCE" });
const StudentProfileComponent = withTitle({ component: StudentProfile, title: "Dashboard | RESILLIENCE" });
const ErrorComponent = withTitle({ component: Error, title: "Not Found | RESILLIENCE" });

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
                  <Route exact path="/" component={HomeComponent} />
                  <Route path="/about-us" component={AboutUsComponent} />
                  <Route path="/features" component={FeaturesComponent} />
                  <Route path="/faqs" component={FaqsComponent} />
                  <Route path="/contact-us" component={ContactUsComponent} />
                  <Route path="/career" component={CareerComponent} />
                  <Route path="/admin/createblogs" component={PostBlogComponent} />
                  <Route exact path="/blogs" component={ShowBlogsComponent} />
                  <Route exact path="/blogs/:id" component={ParticularBlogComponent} />
                  <Route path="/dashboard" component={StudentProfileComponent} />
                  <Route component={ErrorComponent} />
                  {/* <Route path="/tests" component={TestsComponent} />
                  <Route path="/room" component={RoomComponent} /> */}
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
