import Fotter from "./Footer";
import CheckedIco from "../pictures/home/checked.svg";
import homeAboutUs from "../pictures/home/homeAboutUs.png";

function AboutUsListEl(props) {
  return (
    <div className="aboutUsListEl">
      <img src={CheckedIco} alt="checked" />
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

      <Fotter />
    </>
  );
};

export default Home;
