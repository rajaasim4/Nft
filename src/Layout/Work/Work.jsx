import React from "react";
import { AiOutlineWallet } from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import { HiOutlineCollection } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import arrow from "../../assets/arrow.svg";
import Heading from "../../Components/Heading/Heading";
import "./Work.css";
const Work = () => {
  return (
    <div className="Work" data-aos="slide-right">
      <div className="Work_blur_effect"></div>
      <Heading title={"How it Works"} display={"none"} />
      <div className="Work_main">
        <WorkCard title={"Setup Your Wallet"}>
          <AiOutlineWallet />
        </WorkCard>
        <div className="arrow">
          <img src={arrow} alt="" />
        </div>
        <WorkCard title={"Create Your Collection"}>
          <HiOutlineCollection />
        </WorkCard>
        <div className="arrow">
          <img src={arrow} alt="" />
        </div>
        <WorkCard title={"Add Your NFTS"}>
          <BsCreditCard2Back />
        </WorkCard>
        <div className="arrow">
          <img src={arrow} alt="" />
        </div>
        <WorkCard title={"List Them for Sales"}>
          <MdDashboard />
        </WorkCard>
      </div>
    </div>
  );
};
const WorkCard = (props) => {
  return (
    <>
      <div className="Work_main_section">
        <div className="Work_main_sub">{props.children}</div>
        <h5>{props.title}</h5>
      </div>
    </>
  );
};

export default Work;
