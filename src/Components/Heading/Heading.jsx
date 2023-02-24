import React from "react";
import "./Heading.css";

const Heading = (props) => {
  return (
    <div className="Heading">
      <div
        className="Heading_Ellipse"
        style={{ backgroundColor: props.bg,display:props.display }}
      ></div>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Heading;
