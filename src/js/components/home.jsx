import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-header">
            <h4 className="test text-secondary">
              Welcome to the trivia challenge!
            </h4>
          </div>
          <div className="card-body">
            <h6> You will be presented with 10 True or False questions. </h6>
            <h6> Can you score 100%?</h6>
          </div>
          <div className="card-footer">
            <Link to="/questions">
              <button className="btn btn-primary">Begin</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
