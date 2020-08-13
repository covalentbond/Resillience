import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//Components
import Navbar from "./components/NavBar/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import Career from "./components/Career";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/career" component={Career} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
