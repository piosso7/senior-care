import TopBanner from "./TopBanner";
import Frame from "./Frame";

import servicesTB from "../pictures/topBanner/servicesTB.png";

import meal1 from "../pictures/services/meal1.png";
import meal2 from "../pictures/services/meal2.png";
import meal3 from "../pictures/services/meal3.png";

import socialActivities1 from "../pictures/services/socialActivities1.png";
import socialActivities2 from "../pictures/services/socialActivities2.png";
import socialActivities3 from "../pictures/services/socialActivities3.png";
import socialActivities4 from "../pictures/services/socialActivities4.png";

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
      <div className="dietaryServices">
        <h2 className="dietaryServicesTitle">Dietary Services</h2>
        <div className="dietaryServicesWrapper">
          <Frame
            img={meal1}
            title="Meal Plan #1"
            text="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
          <Frame
            img={meal2}
            title="Meal Plan #2"
            text="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
          <Frame
            img={meal3}
            title="Meal Plan #3"
            text="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
        </div>
      </div>
      <div className="socialActivities">
        <h2 className="socialActivitiesTitle">
          Recreational and Social Activities
        </h2>

        {/* PODMIENIĆ KLASY I PRZESTYLOWAĆ */}
        <div className="socialActivitiesWrapper">
          <Frame
            img={socialActivities1}
            title="Yoga"
            text="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
          <Frame
            img={socialActivities2}
            title="Board Games"
            text="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
          <Frame
            img={socialActivities3}
            title="Gardenning"
            text="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
          <Frame
            img={socialActivities4}
            title="Indoor Games"
            text="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
        </div>
      </div>
    </>
  );
};

export default Services;
