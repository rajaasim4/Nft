import React from "react";
import {
  AiOutlineGooglePlus,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import logo2 from "../../assets/logo2.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_left">
          <div className="footer_sub_1 footer_sub">
            <img src={logo2} alt="" />
          </div>
          <div className="footer_sub_2 footer_sub">
            <p>
              Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla
              pharetra gravida est.{" "}
            </p>
            <div className="footer_social_copyright">
              <div className="footer_social">
                <FaYoutube />
                <AiOutlineTwitter />
                {/* <FaFacebookF /> */}
                <GrFacebookOption />
                <AiOutlineGooglePlus />
              </div>
              <div className="footer_copyright">
                <p>All right are reserved &copy; {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_sub_3 footer_sub">
            <h5>About Us</h5>
            <ul>
              <li>
                <a href="/#">About NFT</a>
              </li>
              <li>
                <a href="/#">Live Auctions</a>
              </li>
              <li>
                <a href="/#">NFt Blog</a>
              </li>
              <li>
                <a href="/#">Activity</a>
              </li>
            </ul>
          </div>
          <div className="footer_sub_4 footer_sub">
            <h5>Support</h5>
            <ul>
              <li>
                <a href="/#">Help & Support</a>
              </li>
              <li>
                <a href="/#">Item Details</a>
              </li>
              <li>
                <a href="/#">Autor Profile</a>
              </li>
              <li>
                <a href="/#">Collections</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
