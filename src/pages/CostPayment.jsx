import { useState } from "react";
import TopBanner from "./TopBanner";
import costPaymentTB from "../pictures/topBanner/costPaymentTB.png";

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
            className={isActive ? "backgroundSwitch" : "backgroundSwitch right"}
          ></div>
          <div
            className={
              isActive ? "monthSubscription" : "monthSubscription right"
            }
            onClick={handleClickLeft}
          >
            Monthly
          </div>
          <div className="yearSubscription" onClick={handleClickRight}>
            <p className={isActive ? "year" : "year right"}>Yearly</p>
            <p className="promo">Save 20%</p>
          </div>
        </div>
        <div className="plans">
          <div className="plan"></div>
          <div className="plan"></div>
          <div className="plan"></div>
        </div>
      </div>
    </>
  );
};

export default CostPayment;
