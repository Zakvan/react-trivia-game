import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, updateAnswer } from "../actions/index";
import Question from "./question";
import { Link } from "react-router-dom";

class Questions extends Component {
  componentDidMount() {
    this.props.getData();
  }

  state = {
    currentIndex: 0
  };

  handleNext = () => {
    if (this.state.currentIndex !== this.props.questions.length - 1) {
      let currentIndex = this.state.currentIndex + 1;
      this.setState({
        currentIndex
      });
    }
  };

  handlePrev = () => {
    if (this.state.currentIndex !== 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  };

  selectAnswerHandler = answer => {
    this.props.updateAnswer(this.state.currentIndex, answer);
  };

  render() {
    let prevBtn = (
      <button className="btn btn-primary mr-3" onClick={this.handlePrev}>
        Prev
      </button>
    );
    let nxtBtn = (
      <button className="btn btn-primary" onClick={this.handleNext}>
        Next
      </button>
    );

    if (this.state.currentIndex === this.props.questions.length - 1) {
      nxtBtn = (
        <Link to="/result">
          <button className="btn btn-primary m-2">Show result</button>
        </Link>
      );
    }

    if (this.state.currentIndex === 0) {
      prevBtn = "";
    }

    return (
      <div className="container mt-5">
        <div className="card">
          <Question
            question={this.props.questions[this.state.currentIndex]}
            selectAnswerHandler={answer => {
              this.selectAnswerHandler(answer);
            }}
          />
          <div className="card-footer">
            {prevBtn}
            {nxtBtn}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.remoteQuestions
  };
}

export default connect(
  mapStateToProps,
  { getData, updateAnswer }
)(Questions);
