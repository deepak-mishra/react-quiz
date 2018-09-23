import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 60,
      isPlaying: false
    };
  }

  componentWillMount = () => {
    this.startTimer();
  };

  componentWillUnmount = () => {
    this.resetTimer();
  };

  tick = () => {
    const currentDate = new Date();
    if (this.state.timeLeft === 0) {
      this.stopTimer();
      if (this.props.timeOver) {
        this.props.timeOver();
      }
      return;
    }
    switch (!this.state.date) {
      case true:
        this.setState({
          date: currentDate
        });
        break;
      default:
        this.setState((prevState, props) => ({
          date: currentDate,
          timeLeft:
            prevState.timeLeft -
            Math.round((currentDate - prevState.date) / 1000)
        }));
    }
  };

  startTimer = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState({
      isPlaying: true
    });
  };

  resetTimer = () => {
    clearInterval(this.timerID);
    this.setState({
      isPlaying: false,
      date: null
    });
  };

  stopTimer = () => {
    clearInterval(this.timerID);
    this.setState({
      isPlaying: false
    });
  };

  render() {
    const isPlaying = this.state.isPlaying;
    return <div>{this.state.timeLeft}</div>;
  }
}

Timer.propTypes = {
  timeOver: PropTypes.func
};
