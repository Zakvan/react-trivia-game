import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import renderHTML from "react-render-html";

class Result extends Component {
  state = {
    score: 0
  };

  getScore = ans => {
    if (ans) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };

  caclulateScore = questions => {
    let score = 0;
    questions.forEach(question => {
      console.log(question);
      if (question.answer === question.correct_answer) {
        score = score + 1;
      }
    });
    this.setState({
      score: score
    });
  };

  componentDidMount() {
    this.caclulateScore(this.props.questions);
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-header">
            <h4 className="test text-primary">
              You scored {this.state.score}/{this.props.questions.length}
            </h4>
          </div>
          <div className="card-body pt-0 pl-0 pr-0">
            <ul className="list-group">
              {this.props.questions.map(que => {
                return que.answer === que.correct_answer ? (
                  <li className="list-group-item" key={que.question}>
                    <span className="fas fa-check text-success mr-2" />
                    <span>{renderHTML(que.question)}</span>
                  </li>
                ) : (
                  <li className="list-group-item" key={que.question}>
                    <span className="fas fa-times text-danger mr-2" />
                    <span>{renderHTML(que.question)}</span>
                  </li>
                );
              })}
            </ul>

            <Link to="/">
              <button className="btn btn-primary mt-3 ml-3">Play again?</button>
            </Link>
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

export default connect(mapStateToProps)(Result);
