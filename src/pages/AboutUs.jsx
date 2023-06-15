import TopBanner from "./TopBanner";
import aboutUsTB from "../pictures/topBanner/aboutUsTB.png";

import missionImg from "../pictures/aboutUs/mission.png";
import historyDot from "../pictures/aboutUs/historyDot.svg";

const HistoryElement = (props) => {
  return (
    <div className="historyElement">
      <div className="date">
        <h2>{props.date}</h2>
      </div>
      <div className="description">
        <div className="title">
          <img className="dot" src={historyDot} alt="dot" />
          <h2>{props.title}</h2>
        </div>
        <div className="insideDescription">
          <div className="line"></div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs">
        <TopBanner img={aboutUsTB} title="About Us" />
        <div className="mission">
          <div className="descriptionWrapper">
            <h2>Mission Statement</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada
              placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim
              congue pellentesque ac hac. Viverra donec nulla id enim posuere
              donec morbi dolor. Eu adipiscing massa ut proin mauris orci
              tincidunt ac in.
            </p>
          </div>
          <img src={missionImg} alt="mission img" />
        </div>
        <div className="history">
          <h2>History of the home</h2>
          <div className="historyElments">
            <HistoryElement
              date="1990"
              title="New Beginning"
              description="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem."
            />
            <HistoryElement
              date="2000"
              title="Residence Expand"
              description="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem."
            />
            <HistoryElement
              date="2010"
              title="Home Care Service Started"
              description="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem."
            />
            <HistoryElement
              date="2020"
              title="Country Wide Coverage"
              description="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
