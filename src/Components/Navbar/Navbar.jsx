import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  const [navshow, setNavShow] = useState(false);
  const Navshow = () => {
    setNavShow(!navshow);
  };
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#df2020" : " #212245",
    };
  };
  return (
    <>
      <nav>
        <div className="nav_logo">
          {/* <a href=""> */}
          <img src={logo} alt="" />
          {/* </a> */}
        </div>
        <div className={navshow ? "main_nav main_nav_show" : "main_nav"}>
          <AiOutlineClose className="nav_close" onClick={Navshow} />
          <ul>
            <li>
              <a href="/#">Explore</a>
            </li>
            <li>
              <a href="/#">Creators</a>
            </li>
            <li>
              <a href="/#">Community</a>
            </li>
          </ul>
          <div className="nav_btn">
            <button className="black_bg_btn">Connect Wallet</button>
          </div>
        </div>
        <div className="Hamburger">
          <FaBars onClick={Navshow} />
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
