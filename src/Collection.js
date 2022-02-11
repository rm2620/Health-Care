import React from "react";
import "./Collection.css";

function Collection({ image, content }) {
  return (
    <div className="collection">
      <div class="card" style={{ width: "18rem" }}>
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Collection;
