import React, { Component } from "react";
import PropTypes from "prop-types";
import shuffle from "lodash/shuffle";
import FlipMove from "react-flip-move";
import { Timer } from "./index";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingMethod: "chronological",
      question: this.props.question
    };
  }

  onChange = e => {
    const { setCurrentScore, question } = this.props;
    const selected = e.target.value;

    if (selected === question.correct) {
      setCurrentScore(this.props.score + 1);
    }
  };

  mouserOver = () => {
    this.setState(
      {
        sortingMethod: "shuffle",
        question: this.props.question
      },
      () => {
        this.state.question.choices = shuffle(this.props.question.choices);
      }
    );
  };

  timeOver = () => {
    const { setCurrentItem } = this.props;
    setCurrentItem(this.props.current + 1);
  };

  goNext = e => {
    e.preventDefault();
    const { setCurrentItem } = this.props;
    setCurrentItem(this.props.current + 1);
  };

  render() {
    const { question } = this.props;
    return (
      <div className="">
        <h5 className="card-header">
          <span className="float-right">
            <Timer timeOver={this.timeOver} />
          </span>
          {question.text}
        </h5>
        <div className="card-body">
          <ul
            className="list-group list-group-flush"
            onMouseEnter={this.mouserOver}
            onMouseLeave={this.mouserOver}
          >
            <FlipMove
              typeName={null}
              sortingMethod={this.state.sortingMethod}
              enterAnimation="accordionVertical"
              leaveAnimation="accordionVertical"
            >
              {this.state.question.choices.map(choice => (
                <li className="list-group-item" key={choice.id}>
                  <input
                    type="radio"
                    className="form-check-input"
                    onChange={this.onChange.bind(this)}
                    name={question.id}
                    value={choice.id}
                    id={choice.id}
                  />
                  <label className="form-check-label" htmlFor={choice.id}>
                    {choice.text}
                  </label>
                </li>
              ))}
            </FlipMove>
          </ul>
          <p className="card-text" />
          <a href="#" className="btn btn-primary" onClick={this.goNext}>
            Submit
          </a>
        </div>
      </div>
    );
  }
}

export default Question;

Question.propTypes = {
  setCurrentScore: PropTypes.func,
  setCurrentItem: PropTypes.func,
  question: PropTypes.object,
  score: PropTypes.string
};
