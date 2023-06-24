import TopBanner from "./TopBanner";
import amenitiesTB from "../pictures/topBanner/amenitiesTB.png";

import Frame from "./Frame";

import bankLogo from "../pictures/amenities/bankLogo.png";
import commonAreas1 from "../pictures/amenities/commonAreas1.png";
import commonAreas2 from "../pictures/amenities/commonAreas2.png";
import indoor1 from "../pictures/amenities/indoor1.png";
import indoor2 from "../pictures/amenities/indoor2.png";
import outdoor1 from "../pictures/amenities/outdoor1.png";
import outdoor2 from "../pictures/amenities/outdoor2.png";

const Amenities = () => {
  return (
    <>
      <TopBanner img={amenitiesTB} title="Amenities" />
      <div className="indoor">
        <h2 className="indoorTitle">Indoor</h2>
        <div className="indoorWrapper">
          <Frame
            img={indoor1}
            title="Private Rooms"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Frame
            img={indoor2}
            title="Semi- Private Rooms"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </div>
      <div className="outdoor">
        <h2 className="outdoorTitle">Outdoor</h2>
        <div className="outdoorWrapper">
          <Frame
            img={outdoor1}
            title="Outdoor Spaces"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Frame
            img={outdoor2}
            title="Gardens"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </div>
      <div className="commonAreas">
        <h2 className="commonAreasTitle">Common Areas</h2>
        <div className="commonAreasImages">
          <img src={commonAreas1} alt="Common Areas img" />
          <img src={commonAreas2} alt="Common Areas img" />
        </div>
        <p className="commonAreasText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="accessibilityFeatures">
        <h2 className="accessibilityFeaturesTitle">Accessibility Features</h2>
        <div className="accessibilityFeaturesWrapper">
          <Frame
            img={bankLogo}
            title="Accessibility Features #1"
            text="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
          <Frame
            img={bankLogo}
            title="Accessibility Features #2"
            text="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
          <Frame
            img={bankLogo}
            title="Accessibility Features #3"
            text="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
        </div>
      </div>
    </>
  );
};

export default Amenities;
