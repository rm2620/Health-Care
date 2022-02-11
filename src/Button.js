import React, { useState } from "react";
import "./Button.css";

function Button({ text, content }) {
  const [isActive, setActive] = useState(false);

  return (
    <div className="button">
      <p>
        <button
          style={{ marginTop: "10px" }}
          class="btn btn-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
          value={text}
        >
          {text}
        </button>
      </p>
      <div style={{ minHeight: "100px" }}>
        <div className="collapse collapse-horizontal" id="collapseWidthExample">
          <div className="card card-body">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Button;
