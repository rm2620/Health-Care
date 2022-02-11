import React from "react";
import DonateHeader from "./DonateHeader";
import "./Confirmation.css";
import { useHistory } from "react-router-dom";

function Confirmation() {
  const history = useHistory();

  const handleClick = (e) => {
    history.push("/");
  };

  return (
    <div>
      <DonateHeader title="Payment Done" />
      <hr />
      <div className="Confirmation__title">
        <h3>
          Thank you for donating and helping us move forward with this
          campaign!!!
        </h3>
      </div>

      <div className="Confirmation__form">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            style={{ width: "60%" }}
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Feedback
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Help us improve by giving your views"
          ></textarea>
        </div>
        <div>
          <button type="submit" class="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
