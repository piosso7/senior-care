import CheckedIco from "../pictures/home/checked.svg";
import homeAboutUs from "../pictures/home/homeAboutUs.png";

import osCare from "../pictures/home/osCare.svg";
import osNutrition from "../pictures/home/osNutrition.svg";
import osNursing from "../pictures/home/osNursing.svg";
import osStaff from "../pictures/home/osStaff.svg";
import clientAvatar1 from "../pictures/home/clientAvatar1.png";

import centerForYou from "../pictures/home/centerForYou.png";
import paperAeroplane from "../pictures/home/paperAeroplane.svg";

//Single About Us list element function
function AboutUsListEl(props) {
  return (
    <div className="aboutUsListEl">
      <img src={CheckedIco} alt="checked" />
      <p>{props.description}</p>
    </div>
  );
}

//Single Our Services Car function
function OurServicesCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt="Our Services Card Logo" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

//Single client review function
function ClientReview(props) {
  return (
    <div className="clientReview">
      <p className="clientRevievDescription">{props.description}</p>
      <div className="clientInfo">
        <img src={props.avatar} alt="Client Avatar" />
        <div className="userName">
          <h3>{props.name}</h3>
          <p>{props.company}</p>
        </div>
      </div>
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
      <section className="clientReviews">
        <h2>Client Reviews</h2>
        <ClientReview
          description="Lorem ipsum dolor sit amet consectetur. Amet sed tellus elementum mauris. Libero maecenas eget tellus morbi diam enim euismod egestas. Adipiscing fringilla quis justo adipiscing eget aenean sollicitudin. Nibh ut sed sodales magna risus tellus. Nulla ut arcu ac justo blandit tincidunt ante. Tincidunt libero urna ut aliquet vitae nunc quisque sapien cursus."
          avatar={clientAvatar1}
          name="James Smith"
          company="ABC Softwares"
        />
      </section>
      <section className="centerForYou">
        <div className="description">
          <h2>The Best Eldery Care Center For You</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat
            faucibus nam purus sem. Urna pulvinar porttitor dignissim congue
            pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi
            dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in.
          </p>
          <button>Learn More</button>
        </div>
        <img src={centerForYou} alt="Center For You" />
      </section>
      <section className="callBanner">
        <img
          src={paperAeroplane}
          alt="paper aeroplane"
          className="paperAeroplane"
        />
        <div className="description">
          <h2>Looking for a Better Care?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat
            faucibus nam purus sem. Urna pulvinar porttitor dignissim congue
            pellentesque ac hac.
          </p>
          <button>Call Today</button>
        </div>
      </section>
    </>
  );
};

export default Home;
