import { useState } from "react";
import TopBanner from "./TopBanner";
import costPaymentTB from "../pictures/topBanner/costPaymentTB.png";
import MonthPlans from "./MonthPlans";

const CostPayment = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClickLeft = () => {
    setIsActive(true);
  };
  const handleClickRight = () => {
    setIsActive(false);
  };
  return (
    <>
      <TopBanner img={costPaymentTB} title="Cost and Payment" />
      <div className="paymentPlans">
        <h2 className="paymentPlansTitle">Payment Plans</h2>
        <div className="subscriptionTimeSwitch">
          <div
            className={
              isActive ? "backgroundSwitch" : "backgroundSwitch yearPlan"
            }
          ></div>
          <div
            className={
              isActive ? "monthSubscription" : "monthSubscription yearPlan"
            }
            onClick={handleClickLeft}
          >
            Monthly
          </div>
          <div className="yearSubscription" onClick={handleClickRight}>
            <p className={isActive ? "year" : "year yearPlan"}>Yearly</p>
            <p className="promo">Save 20%</p>
          </div>
        </div>
        <div className="monthPlans">
          <MonthPlans />
        </div>
      </div>
    </>
  );
};

export default CostPayment;
