import React, { Component } from "react";

class Scorecard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav aria-label="breadcrumb clearfix">
        <ol className="breadcrumb">
          <li className="col-sm-11 breadcrumb-item active" aria-current="page">
            {`Question ${this.props.current}`}
            {' '}
            {" / "}
            {" "}
            {this.props.questions.length}
          </li>
        </ol>
      </nav>
    );
  }
}
export default Scorecard;
