import React, { Component } from "react";
import "./App.css";
import Home from "./js/components/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Questions from "./js/components/questions";
import result from "./js/components/result";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" exact component={Home} />
          <Route path="/questions" component={Questions} />
          <Route path="/result" component={result} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
