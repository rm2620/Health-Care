import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Donate.css";
import DonateHeader from "./DonateHeader";

function Donate() {
  const history = useHistory();

  const [amt, setAmt] = useState(50);

  const handleChange = (e) => {
    const amount = e.target.value;
    setAmt(amount);
  };

  const handleClick = (e) => {
    if (amt >= 50) {
      history.push("/payment");
    }
  };

  return (
    <div className="donate">
      <DonateHeader title="Donation Summary" />
      <hr />
      <div className="donate__form">
        <form style={{ width: "100%" }}>
          {/* <fieldset disabled> */}
          <legend>Donation Summary</legend>
          <hr />
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">
              Donation Amount
            </label>
            <input
              type="text"
              id="disabledTextInput"
              class="form-control"
              placeholder="₹ amount"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="disabledSelect" class="form-label">
              Include an additional donation to help us.
            </label>
            <p>
              <strong>
                You have to re-enter the amount you want to donate on payment
                page
              </strong>
            </p>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="disabledFieldsetCheck"
              />
              <label class="form-check-label" for="disabledFieldsetCheck">
                Mark the donation as anonymous
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" onClick={handleClick}>
            Continue To Pay ₹ {amt}
          </button>
          {/* </fieldset> */}
        </form>
      </div>
    </div>
  );
}

export default Donate;
