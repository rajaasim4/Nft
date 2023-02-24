import React from "react";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import Cards from "../../Components/Cards/Cards";
import Heading from "../../Components/Heading/Heading";
import "./Auctions.css";
const Auctions = () => {
  return (
    <div className="Auctions" data-aos="fade-right">
      <Heading title={"Live Auctions"} bg={"#8613A5"} />
      <div className="Auctions_main">
        <Cards bgimg={c1} data-aos="slide-right" />
        <Cards bgimg={c2} data-aos="fade-up" />
        <Cards bgimg={c3} data-aos="fade-up" />
      </div>
      <button className="black_bg_btn Auctions_btn">View All</button>
    </div>
  );
};

export default Auctions;
