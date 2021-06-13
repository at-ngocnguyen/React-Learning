import React from "react";
import Circle from "components/Circle/Circle";
class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.runTime,
      seconds: this.props.runTime,
      stop: false,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {}

  startTimer() {
    this.timer = setInterval(this.countDown, 1000);
  }
  stopTimer() {
    this.setState({
      time: this.props.runTime,
      seconds: this.props.runTime,
      stop: false,
    });
    clearInterval(this.timer);
  }
  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: seconds,
      seconds: seconds,
      stop: true,
    });
    if (seconds === 0) {
      clearInterval(this.timer);
      this.setState({
        time: this.props.runTime,
        seconds: this.props.runTime,
        stop: false
      })
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        {this.state.stop ? (
          <button onClick={this.stopTimer}>Stop</button>
        ) : (
          <button onClick={this.startTimer}>Start</button>
        )}
        <Circle time={this.state.time} />
      </div>
    );
  }
}
export default CountDown;
