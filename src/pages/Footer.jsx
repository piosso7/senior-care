import Logo from "../pictures/LogoCareHome.svg";
import FBLogo from "../pictures/footer/fblogo.svg";
import TLogo from "../pictures/footer/tlogo.svg";
import ILogo from "../pictures/footer/ilogo.svg";
import INLogo from "../pictures/footer/inlogo.svg";
import MiniLayout from "./MiniLayout";
const Fotter = () => {
  return (
    <>
      <div className="footer">
        <div className="wrapper">
          <div className="descriptionContainer">
            <img src={Logo} alt="Logo" className="footerLogo" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada
              placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim
              congue pellentesque ac hac.
            </p>
            <div className="social">
              <img src={FBLogo} alt="Facebook Logo" />
              <img src={ILogo} alt="Instagram Logo" />
              <img src={TLogo} alt="Twitter Logo" />
              <img src={INLogo} alt="Linkedin Logo" />
            </div>
          </div>
          <div className="linksContainer">
            <div className="quickLinks">
              <h1>Quick Links</h1>
              <MiniLayout />
            </div>
            <div className="legalLinks">
              <h1>Legal</h1>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <p>Copyright 2023 United Software Solutions, All Rights Reserved</p>
      </div>
    </>
  );
};

export default Fotter;
