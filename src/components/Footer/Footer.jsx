import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="footer"
      id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img
            src={assets.logo}
            alt="logo"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel voluptates minus alias perspiciatis corporis,
            assumenda beatae odit quisquam officia magnam facere porro eius error? Quis numquam totam nostrum consectetur?
          </p>
          <div className="footer-social-icons">
            <img
              src={assets.facebook_icon}
              alt="facebook"
            />
            <img
              src={assets.twitter_icon}
              alt="twitter"
            />
            <img
              src={assets.linkedin_icon}
              alt="linkedin"
            />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+972-53-5557890</li>
            <li>
              <a href="mailto:d.cherkasky@proton.me">d.cherkasky@proton.me</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

