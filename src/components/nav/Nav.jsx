import { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  const [menu, setMenu] = useState(false);

  console.log(menu);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="nav_cont">
      <i
        onClick={handleMenu}
        className={`open_menu fa-solid fa-bars ${menu ? "hide" : ""}`}
      ></i>
      <ul className={`ul ${menu ? "show" : ""}`}>
        <li>
          <Link onClick={handleMenu} style={{ color: "black" }} to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link onClick={handleMenu} to="/process">
            Process
          </Link>
        </li>
        <li>
          <Link onClick={handleMenu} to="/suppliers">
            SUPPLIERS
          </Link>
        </li>
        <li>
          <Link onClick={handleMenu} to="/customers">
            CUSTOMERS
          </Link>
        </li>
        <li>
          <Link onClick={handleMenu} to="/aboutUs">
            ABOUT US
          </Link>
        </li>
        <i onClick={handleMenu} className="close_menu fas fa-times"></i>
      </ul>
    </nav>
  );
};

export default Nav;
