import React, { Component } from "react";

export default class PaymentPlanBanner extends Component {
  render() {
    return (
      <div className="paymentPlanBanner">
        <div className="planLevelWrapper">
          <div className={this.props.classPopular}>{this.props.popular}</div>
          <div className="level">{this.props.level}</div>
        </div>
        <div className="priceWrapper">
          <p className="price">${this.props.price}</p>
          <p className="description">{this.props.description}</p>
        </div>
        <div className="offeringServices">
          <div className="offeringService">
            <img src={this.props.check1} alt="check or uncheck symbol" />
            <p>Name of the Service Offerings</p>
          </div>
          <div className="offeringService">
            <img src={this.props.check2} alt="check or uncheck symbol" />
            <p>Name of the Service Offerings</p>
          </div>
          <div className="offeringService">
            <img src={this.props.check3} alt="check or uncheck symbol" />
            <p>Name of the Service Offerings</p>
          </div>
          <div className="offeringService">
            <img src={this.props.check4} alt="check or uncheck symbol" />
            <p>Name of the Service Offerings</p>
          </div>
          <div className="offeringService">
            <img src={this.props.check5} alt="check or uncheck symbol" />
            <p>Name of the Service Offerings</p>
          </div>
          <div className="offeringService">
            <img src={this.props.check6} alt="check or uncheck symbol" />
            <p>Name of the Service Offerings</p>
          </div>
          <div className="offeringService">
            <img src={this.props.check7} alt="check or uncheck symbol" />
            <p>Name of the Service Offerings</p>
            <p className="coomingSoon">Coming Soon</p>
          </div>
          <div className="offeringService">
            <img src={this.props.check8} alt="check or uncheck symbol" />
            <p>Name of the Service Offerings</p>
            <p className="coomingSoon">Coming Soon</p>
          </div>
          <div className="offeringService">
            <img src={this.props.check9} alt="check or uncheck symbol" />
            <p>Name of the Service Offerings</p>
            <p className="coomingSoon">Coming Soon</p>
          </div>
        </div>
        <div className={this.props.classPopular}>Start free 14-day Trial</div>
        <p className="noCard">No credit card required</p>
      </div>
    );
  }
}
