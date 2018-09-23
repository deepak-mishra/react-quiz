import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { List, Results, Scorecard } from "../components";
import { MockData } from "../utils/MockData";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: MockData,
      score: 0,
      showResult: false,
      current: 1
    };
  }

  setCurrentItem = current => {
    this.setState({
      current,
      showResult: current > this.state.questions.length
    });
  };

  setCurrentScore = score => {
    this.setState({ score });
  };

  render() {
    return (
      <section>
        {!this.state.showResult && <Scorecard {...this.state} />}

        <List
          {...this.state}
          setCurrentItem={this.setCurrentItem}
          setCurrentScore={this.setCurrentScore}
        />
        {this.state.showResult && <Results {...this.state} />}
      </section>
    );
  }
}
