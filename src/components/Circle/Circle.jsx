import React, { Component } from "react";

export default class Circle extends Component {
  constructor(props) {
    super(props);
    this.style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: '100px',
      height: '100px',
      background: 'lightblue',
      borderRadius: '50%',
      margin: '10px'
    };
  }
  render() {
    return <div style={this.style}>{this.props.time}</div>;
  }
}
