import { Component } from "react";

class TopBanner extends Component {
  render() {
    return (
      <div className="topBanner">
        <img src={this.props.img} alt="top banner img" />
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default TopBanner;
