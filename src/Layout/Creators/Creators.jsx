import React from "react";
import Profile from "../../assets/Profile.png";
import Profile2 from "../../assets/Profile2.png";
import profile3 from "../../assets/profile3.png";
import Heading from "../../Components/Heading/Heading";
import "./Creators.css";
import CreatorsCard from "./CreatorsCard";
const Creators = () => {
  return (
    <div className="Creators" data-aos="ease-in-cubic">
      <Heading title={"Top Creators"} bg={"#E03054"} />
      <div className="Creators_main">
        <CreatorsCard imgsrc={Profile2} />
        <CreatorsCard imgsrc={Profile2} />
        <CreatorsCard imgsrc={Profile2} />
        <CreatorsCard imgsrc={Profile2} />
      </div>
      <button className="black_bg_btn Creators_card_btn">View All</button>
    </div>
  );
};

export default Creators;
