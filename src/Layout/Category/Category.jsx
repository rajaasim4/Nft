import React from "react";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import Cards from "../../Components/Cards/Cards";
import Heading from "../../Components/Heading/Heading";
import "./Category.css";
const Category = () => {
  return (
    <div className="Auctions">
      <Heading title={"Explore By Category"} bg={"#8613A5"} />
      <div className="Auctions_main">
        <Cards bgimg={c5} display={"none"} />
        <Cards bgimg={c4} display={"none"} />
        <Cards bgimg={c3} display={"none"} />
      </div>
      <button className="black_bg_btn Auctions_btn">View All</button>
    </div>
  );
};

export default Category;
