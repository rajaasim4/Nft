import React from "react";
import Profile2 from "../../assets/Profile2.png";
import "./SlideCard.css";

const SlideCard = (props) => {
  return (
    <div className="Card SlideCard">
      <div className="Card_top">
        <div
          className="Card_img Slide_card_img"
          style={{ backgroundImage: ` url(${props.bgimg}) ` }}
        ></div>
      </div>
      <div className="Card_btottom">
        <div className="Card_name_details">
          <div className="Card_details_left">
            <img src={Profile2} alt="" />
            <p>@wzard</p>
          </div>
          <div className="Card_details_right Slide_card_right">
            <p>ERC-721</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
