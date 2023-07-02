import { useState } from "react";
import TopBanner from "./TopBanner";
import costPaymentTB from "../pictures/topBanner/costPaymentTB.png";
import paperAeroplane from "../pictures/home/paperAeroplane.svg";
import MonthPlans from "./MonthPlans";
import YearPlans from "./YearPlans";

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
        <div className="plans">
          <div className={isActive ? "plansOn" : "plansOff"}>
            <MonthPlans />
          </div>
          <div className={isActive ? "plansOff" : "plansOn"}>
            <YearPlans />
          </div>
        </div>
        <div className="insuranceWrapper">
          <h2 className="title">Insurance and Medicare/Medicaid</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat
            faucibus nam purus sem. Urna pulvinar porttitor dignissim congue
            pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi
            dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in.
            Augue non malesuada placerat faucibus nam purus sem. Lorem ipsum
            dolor sit amet consectetur. Augue non malesuada placerat faucibus
            nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque
            ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu
            adipiscing massa ut proin mauris orci tincidunt ac in. Augue non
            malesuada placerat faucibus nam purus sem.
          </p>
        </div>
        <section className="callBanner">
          <img
            src={paperAeroplane}
            alt="paper aeroplane"
            className="paperAeroplane"
          />
          <div className="description">
            <h2>Financial Assistance Resources</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada
              placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim
              congue pellentesque ac hac.
            </p>
            <button>Get in Touch</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CostPayment;
