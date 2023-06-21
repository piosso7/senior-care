import React, { Component } from "react";

export default class Frame extends Component {
  render() {
    return (
      <div className="frame">
        <img className="frameImg" src={this.props.img} alt="img" />
        <h3 className="frameTitle">{this.props.title}</h3>
        <p className="frameText">{this.props.text}</p>
      </div>
    );
  }
}
