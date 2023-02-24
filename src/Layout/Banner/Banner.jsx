import React from "react";
import { BsArrowDown } from "react-icons/bs";
import Banner_img from "../../assets/Banner_img.png";
import Navbar from "../../Components/Navbar/Navbar";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <header>
        <Navbar />
        <div className="Banner">
          <div className="Banner_left">
            <h1>
              Explore, Buy and Sell the
              <span> Best NFTs!</span>
            </h1>
            <div className="Banner_btns">
              <button className="yellow_bg_btn">Explore</button>
              <button className="black_bg_btn white_btn_bg">Create</button>
            </div>
            <div className="Banner_details">
              <div className="Banner_details_sub">
                <h3>32k+</h3>
                <span>Artwork</span>
              </div>
              <div className="Banner_details_sub">
                <h3>20k+</h3>
                <span>Auctions</span>
              </div>
              <div className="Banner_details_sub">
                <h3>12k+</h3>
                <span>Creators</span>
              </div>
            </div>
          </div>
          <div className="Banner_right">
            <div className="Banner_right_Card" data-aos="slide-left">
              <div className="Banner_right_Card_img">
                {/* <img src={Banner_img} alt="" /> */}
                <div className="Banner_card_time">
                  <p>
                    Current Bid
                    <br />
                    <br />
                    <span>0.99 ETH</span>
                  </p>{" "}
                  <p>
                    Ends in
                    <br />
                    <br />
                    <span>25 hrs</span>
                  </p>{" "}
                </div>
              </div>
              <div className="Banner_Card_details">
                <h4>
                  Artisit
                  <br />
                  <span>@wzard</span>
                </h4>
                <button className="yellow_bg_btn">Place Bid</button>
              </div>
            </div>
          </div>
          <div className="Banner_arrow">
            <BsArrowDown />
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
