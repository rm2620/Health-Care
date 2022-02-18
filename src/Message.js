import React from "react";
import { Link } from "react-router-dom";
import DonateHeader from "./DonateHeader";
import "./Message.css";

function Message() {
  return (
    <div>
      <DonateHeader title="Payment Done" />
      <hr />
      <br />
      <br />
      <div className="Message__title">
        <h3>
          Your Feedback has been recorded and a text message has been sent to
          you for the same!!
        </h3>
      </div>

      <Link to="/">
        <button type="submit" class="btn btn-primary">
          Return Home
        </button>
      </Link>
    </div>
  );
}

export default Message;
