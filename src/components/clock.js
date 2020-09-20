import React, { Component } from "react";
import moment from "moment";

export default class clock extends Component {
  state = {
    time: null,
  };
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: moment().format("ddd DD MMM hh:mm/ss") }),
      100
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <p style={{ color: "yellow" }}>{this.state.time}</p>;
  }
}
