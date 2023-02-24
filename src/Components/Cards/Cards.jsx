import React from "react";
import { BsHeart } from "react-icons/bs";
import Profile from "../../assets/Profile.png";
import useCountdownTmer from "../../Hooks/useCountdownTimer";
import "./Cards.css";
const Cards = (props) => {
  return (
    <div className="Card">
      <div className="Card_top">
        <div
          className="Card_img"
          style={{
            backgroundImage: ` url(${props.bgimg}) `,
            backgroundAttachment: props.attachment,
          }}
        >
          <div className="Card_time" style={{ display: props.display }}>
            <p>03:18:04</p>
          </div>
        </div>
      </div>
      <div className="Card_btottom">
        <div className="Card_name_details">
          <div className="Card_details_left">
            <img src={Profile} alt="" />
            <p>
              Virtual Art
              <span>by @wzard</span>
            </p>
          </div>
          <div className="Card_details_right">
            <span>
              <BsHeart />
              92
            </span>
          </div>
        </div>
        <div className="Card_bid">
          <p>Current Bid</p>
          <span>4.89ETH</span>
        </div>
        <button
          className="black_bg_btn"
          style={{ width: "100%", display: props.display }}
        >
          Place a bid
        </button>
      </div>
    </div>
  );
};

export default Cards;
