import React, { useState } from "react";
import "./FAQ.css";

function FAQ({ number, question, answer }) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="faq-item">
      <div className="item-wrapper">
        <a className="count" onClick={toggleClass}>
          {number}
        </a>
        <div className="q-wrapper">
          <div className="question" onClick={toggleClass}>
            <a>{question}</a>
          </div>
          <div className={isActive ? "answer active" : "answer"}>
            <p>{answer}</p>
          </div>
        </div>
      </div>
      <div className="toggle-btn" onClick={toggleClass}>
        <a className="show">{isActive ? "-" : "+"}</a>
      </div>
    </div>
  );
}

export default FAQ;
