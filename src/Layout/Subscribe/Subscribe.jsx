import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <>
      <div className="Subscribe">
        <h2 data-aos="fade-right">Ready For Next NFT Drop</h2>
        <div className="Subscribe_input">
          <div className="Subscribe_input_main" data-aos="flip-down">
            <input type="text" placeholder="info@gmail.com" />
          </div>
          <button className="yellow_bg_btn" data-aos="zoom-in">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
