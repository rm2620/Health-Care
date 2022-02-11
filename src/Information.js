import React from "react";
import "./Information.css";
import Button from "./Button";

function Information({ image, text, content }) {
  return (
    <div className="information">
      <img className="info__image" src={image} alt="Donations-icon"></img>

      <div className="info__button" style={{ height: "130px" }}>
        <Button text={text} content={content} />
      </div>
    </div>
  );
}

export default Information;
