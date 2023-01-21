import React from "react";
import { ICGithub, ICGoogle, ICInstagram, Logo } from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={Logo} alt="Logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICInstagram} />
          <Icon img={ICGithub} />
          <Icon img={ICGoogle} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
