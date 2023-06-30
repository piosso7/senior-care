import React, { Component } from "react";
import PaymentPlanBanner from "./PaymentPlanBanner";
import check from "../pictures/costPayment/check.svg";
import unCheck from "../pictures/costPayment/unCheck.svg";

export default class MonthPlans extends Component {
  render() {
    return (
      <>
        <PaymentPlanBanner
          classPopular="nonPopular"
          level="BASIC"
          price="599"
          description="Per member, per Month"
          check1={unCheck}
          check2={unCheck}
          check3={unCheck}
          check4={check}
          check5={check}
          check6={check}
          check7={check}
          check8={check}
          check9={check}
        />
        <PaymentPlanBanner
          classPopular="nonPopular"
          level="BASIC"
          price="599"
          description="Per member, per Month"
          check1={unCheck}
          check2={unCheck}
          check3={unCheck}
          check4={check}
          check5={check}
          check6={check}
          check7={check}
          check8={check}
          check9={check}
        />
        <PaymentPlanBanner
          classPopular="nonPopular"
          level="BASIC"
          price="599"
          description="Per member, per Month"
          check1={unCheck}
          check2={unCheck}
          check3={unCheck}
          check4={check}
          check5={check}
          check6={check}
          check7={check}
          check8={check}
          check9={check}
        />
      </>
    );
  }
}
