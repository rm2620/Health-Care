import React, { Component } from "react";
import DonateHeader from "./DonateHeader";
import "./Confirmation.css";
import { Link, Redirect, useHistory } from "react-router-dom";

class Confirmation extends Component {
  state = {
    text: {
      recipient: "",
    },
  };

  sendText = (_) => {
    const { text } = this.state;
    //pass text message GET variables via query string
    fetch(
      `http://127.0.0.1:4000/send-text?recipient='+91'${text.recipient}`
    ).catch((err) => console.error(err));
  };
  render() {
    const { text } = this.state;

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
              Phone Number
            </label>
            <input
              value={text.recipient}
              onChange={(e) =>
                this.setState({ text: { ...text, recipient: e.target.value } })
              }
              style={{ width: "60%" }}
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="+91"
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
            {text.recipient !== "" && text.recipient.length === 10 ? (
              <Link to="/message">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={this.sendText}
                >
                  Submit
                </button>
              </Link>
            ) : (
              <Link to="/">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={this.sendText}
                >
                  Return Home
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Confirmation;
