import React from "react";
import Profile2 from "../../assets/Profile2.png";
const CreatorsCard = (props) => {
  return (
    <div className="CreatorsCard">
      <div className="CreatorsCard_main">
        <div className="Card_name_details">
          <div className="Card_details_left">
            <img src={props.imgsrc} alt="" />
            <p>@wzard</p>
          </div>
          <div className="Card_details_right Slide_card_right CreatorsCard_right">
            <span>33</span>
            <p>items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsCard;
