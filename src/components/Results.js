import React, { Component } from "react";
import PropTypes from "prop-types";

class Results extends Component {
  render() {
    const percent = (this.props.score / this.props.questions.length) * 100;
    if (percent >= 60) {
      var message = "Congratulations!!";
    } else {
      message = "Sorry!!";
    }

    return (
      <div className="card">
        <div className="card-header">
          You Got
          {" "}
          {`${this.props.score} ` +
            ` out of ${this.props.questions.length} Correct`}
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {percent}
            {' '}
            % -
            {message}
          </h5>
          <a href="/" className="btn btn-primary">
            Home
          </a>
        </div>
      </div>
    );
  }
}
export default Results;

Results.propTypes = {
  questions: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired
};
