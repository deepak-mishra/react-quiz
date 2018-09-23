import React, { Component } from "react";
import Question from "./Question.js";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="questions">
        {this.props.questions.map(question => {
          if (question.id === this.props.current) {
            return (
              <Question question={question} key={question.id} {...this.props} />
            );
          }
        })}
      </div>
    );
  }
}
export default List;
