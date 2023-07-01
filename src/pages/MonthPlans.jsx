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
          check1={check}
          check2={check}
          check3={check}
          check4={check}
          check5={check}
          check6={unCheck}
          check7={unCheck}
          check8={unCheck}
          check9={unCheck}
          classPopularButton="nonPopularButton"
        />
        <PaymentPlanBanner
          classPopular="classPopular"
          popular="Popular"
          level="REGULAR"
          price="1299"
          description="Per member, per Month"
          check1={check}
          check2={check}
          check3={check}
          check4={check}
          check5={check}
          check6={check}
          check7={check}
          check8={unCheck}
          check9={unCheck}
          classPopularButton="classPopularButton"
        />
        <PaymentPlanBanner
          classPopular="nonPopular"
          level="PREMIUM"
          price="1999"
          description="Per member, per Month"
          check1={check}
          check2={check}
          check3={check}
          check4={check}
          check5={check}
          check6={check}
          check7={check}
          check8={check}
          check9={check}
          classPopularButton="nonPopularButton"
        />
      </>
    );
  }
}
