import "./Bottom.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Bottom = () => {
  return (
    <div className="bottom_container">
      <div className="logo">
        <img
          src="https://wb05nopapi.wpdns.site/wp-content/uploads/2023/09/proworksnewlogo.png"
          alt="Logo"
        />
      </div>
      <ul className="show">
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaGithub />
        </li>
      </ul>
      <div className="bottom_telephon_container">
        <a href="tel://9477654791">000-000-0000</a>
        <a href="mailto:example@domain.com">example@domain.com</a>
      </div>
    </div>
  );
};

export default Bottom;
