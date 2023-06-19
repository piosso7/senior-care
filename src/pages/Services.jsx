import TopBanner from "./TopBanner";

import servicesTB from "../pictures/topBanner/servicesTB.png";

const Service = (props) => {
  return (
    <div className="service">
      <div className="details">
        <div className="title">
          <h2>{props.mainTitle}</h2>
          <p>{props.mainText}</p>
        </div>
        <div className="description">
          <h3>Service Details</h3>
          <p>{props.descText}</p>
        </div>
      </div>
      <div className="offers">
        <h3>Service Offerings</h3>
        <p>{props.offerText1}</p>
        <p>{props.offerText2}</p>
        <p>{props.offerText3}</p>
        <p>{props.offerText4}</p>
        <p>{props.offerText5}</p>
        <p>{props.offerText6}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <TopBanner img={servicesTB} title="Services" />
      <div className="services">
        <Service
          mainTitle="Resident Care"
          mainText="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Lorem ipsum dolor sit amet."
          descText="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem."
          offerText1="Name of the Service Offerings"
          offerText2="Name of the Service Offerings"
          offerText3="Name of the Service Offerings"
          offerText4="Name of the Service Offerings"
          offerText5="Name of the Service Offerings"
          offerText6="Name of the Service Offerings"
        />
        <Service
          mainTitle="Elderly Nutrition"
          mainText="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Lorem ipsum dolor sit amet."
          descText="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem."
          offerText1="Name of the Service Offerings"
          offerText2="Name of the Service Offerings"
          offerText3="Name of the Service Offerings"
          offerText4="Name of the Service Offerings"
          offerText5="Name of the Service Offerings"
          offerText6="Name of the Service Offerings"
        />
        <Service
          mainTitle="Skilled Nursing"
          mainText="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Lorem ipsum dolor sit amet."
          descText="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem."
          offerText1="Name of the Service Offerings"
          offerText2="Name of the Service Offerings"
          offerText3="Name of the Service Offerings"
          offerText4="Name of the Service Offerings"
          offerText5="Name of the Service Offerings"
          offerText6="Name of the Service Offerings"
        />
        <Service
          mainTitle="Caring Staff"
          mainText="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Lorem ipsum dolor sit amet."
          descText="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem."
          offerText1="Name of the Service Offerings"
          offerText2="Name of the Service Offerings"
          offerText3="Name of the Service Offerings"
          offerText4="Name of the Service Offerings"
          offerText5="Name of the Service Offerings"
          offerText6="Name of the Service Offerings"
        />
      </div>
    </>
  );
};

export default Services;
