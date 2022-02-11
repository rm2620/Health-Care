import React from "react";
import { useHistory } from "react-router-dom";
import "./Data.css";

function Data({ image, title, text }) {
  const history = useHistory();

  const handleClick = (e) => {
    const txt = e.target.value;
    console.log(txt);
    history.push(`/${text}`);
  };

  return (
    <div className="data">
      <div className="data__image">
        <img src={image} alt="" />
      </div>
      <div className="data__info">
        <h2>{title}</h2>
        <div className="data__button">
          {text === "Donate" ? (
            <button
              style={{ height: "40px", paddingTop: "4px" }}
              type="button"
              class="btn btn-secondary btn-lg"
              value={text}
              onClick={handleClick}
            >
              {text}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Data;
