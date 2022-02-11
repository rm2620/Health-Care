import React, { useEffect, useState } from "react";
import DonateHeader from "./DonateHeader";
import "./Payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { useHistory } from "react-router-dom";

function Payment() {
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const [amount, setAmount] = useState(50);

  const examineChange = (e) => {
    const amt = e.target.value;
    if (amt >= 50) {
      setAmount(amt);
    }
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //   stripe expects the total in a currencies subunits
        url: `/payments/create?total=${amount * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/confirmation");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <DonateHeader title="Payment" />
      <hr />

      <div className="payment__container">
        <div className="payment__section">
          <div style={{ width: "30%" }} class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              Amount
            </span>
            <input
              type="number"
              class="form-control"
              placeholder="₹ 50 Minimum Amount"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={examineChange}
            />
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h4>Payment Method</h4>
          </div>
          <div className="payment__details">
            {/* stripe magic */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h4>Donation: {value}</h4>}
                  decimalScale={2}
                  value={amount}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Doante"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
