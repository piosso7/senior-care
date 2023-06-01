import Fotter from "./Footer";
import CheckedIco from "../pictures/home/checked.svg";
import homeAboutUs from "../pictures/home/homeAboutUs.png";

import osCare from "../pictures/home/osCare.svg";
import osNutrition from "../pictures/home/osNutrition.svg";
import osNursing from "../pictures/home/osNursing.svg";
import osStaff from "../pictures/home/osStaff.svg";

function AboutUsListEl(props) {
  return (
    <div className="aboutUsListEl">
      <img src={CheckedIco} alt="checked" />
      <p>{props.description}</p>
    </div>
  );
}

function OurServicesCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt="Our Services Card Logo" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <section className="header">
        <div className="headerDescription">
          <h1>Stay Comfortably Like Your Home</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Mattis aenean quis cursus
            consectetur tortor facilisis vulputate.
          </p>
          <button>Get in touch</button>
        </div>
      </section>
      <section className="shortAboutUs">
        <div className="wrapper">
          <div className="imgWrapper">
            <img src={homeAboutUs} alt="homeAboutUs" />
            <div></div>
          </div>
          <div className="descriptionWrapper">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada
              placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim
              congue pellentesque ac hac.
            </p>
            <AboutUsListEl description="Lorem ipsum dolor sit amet consectetur." />
            <AboutUsListEl description="Augue non malesuada placerat faucibus nam purus sem." />
            <AboutUsListEl description="Urna pulvinar porttitor dignissim congue pellentesque ac hac." />
            <AboutUsListEl description="Eu adipiscing massa ut proin mauris orci tincidunt ac in." />
          </div>
        </div>
      </section>
      <section className="shortOurServices">
        <h2>Our Services</h2>
        <div className="carts">
          <OurServicesCard
            img={osCare}
            title="Resident Care"
            description="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
          <OurServicesCard
            img={osNutrition}
            title="Elderly Nutrition"
            description="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
          <OurServicesCard
            img={osNursing}
            title="Skilled Nursing"
            description="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
          <OurServicesCard
            img={osStaff}
            title="Caring Staff"
            description="Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. "
          />
        </div>
      </section>

      <Fotter />
    </>
  );
};

export default Home;
