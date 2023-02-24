import React from "react";
import binance from "../../assets/binance.png";
import bitmex from "../../assets/bitmex.png";
import Blockchainpng from "../../assets/Blockchainpng.png";
import Coinbase from "../../assets/Coinbase.png";
import "./Brands.css";
const Brands = () => {
  return (
    <div className="Brands">
      <BrandsSub imgsrc={Coinbase} />
      <BrandsSub imgsrc={Blockchainpng} />
      <BrandsSub imgsrc={binance} />
      <BrandsSub imgsrc={bitmex} />
    </div>
  );
};
const BrandsSub = (props) => {
  return (
    <>
      <div className="Brands_sub">
        <img src={props.imgsrc} alt="" />
      </div>
    </>
  );
};
export default Brands;
