import React, { Component } from "react";
import renderHTML from "react-render-html";

class Question extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="card-header">
          <h4 className="text-secondary font-weight-normal">
            Category:{" "}
            <span className="text-secondary font-weight-bold">
              {renderHTML(this.props.question.category)}
            </span>
          </h4>
        </div>
        <div className="card-body">
          <h6>{renderHTML(this.props.question.question)}</h6>
          <div className="custom-control custom-radio">
            <input
              className="custom-control-input"
              id="customRadio1"
              type="radio"
              name="answer"
              value={this.props.question.answer}
              onChange={() => {
                this.props.selectAnswerHandler("True");
              }}
              checked={this.props.question.answer === "True"}
            />
            <label className="custom-control-label" htmlFor="customRadio1">
              True
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              className="custom-control-input"
              id="customRadio2"
              type="radio"
              name="answer"
              value={this.props.question.answer}
              onChange={() => {
                this.props.selectAnswerHandler("False");
              }}
              checked={this.props.question.answer === "False"}
            />
            <label className="custom-control-label" htmlFor="customRadio2">
              False
            </label>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Question;
