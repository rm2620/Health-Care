import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import "./Mission.css";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

function Mission() {
  const [currency, setCurrency] = useState("INR");
  const [currencies, setCurrencies] = useState([]);
  const [converted, setConverted] = useState({});
  const [convertedValue, setConvertedValue] = useState(85.396396);

  const history = useHistory();

  useEffect(() => {
    const getCurrenciesData = async () => {
      fetch("https://openexchangerates.org/api/currencies.json")
        .then((response) => response.json())
        .then((data) => {
          setCurrencies(Object.keys(data));
        });
    };
    getCurrenciesData();
  }, []);

  const onCurrencyChange = async (e) => {
    const currencyCode = e.target.value;
    setCurrency(currencyCode);
    let curr = converted[`${currencyCode}`];
    setConvertedValue(curr);
  };

  useEffect(() => {
    fetch(
      "http://data.fixer.io/api/latest?access_key=92bae86afdba94763a16e4eaaf61dd7d&format=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setConverted(data.rates);
      });
  }, []);

  return (
    <div className="mission">
      <div className="lp-campaign-wrapper">
        <div className="lp-campaign">
          <div className="jsx-548378306 lp-campaign-img">
            <a href="#">
              <div
                style={{ backgroundSize: "cover" }}
                className="lp-campaign-img-bg"
              ></div>
            </a>
            <a href="#">
              <div className="lp-c-blur"></div>
            </a>
            <div className="lpc-mob-title">
              <h3 className="lpc-title">
                Mission: Raise Funds{" "}
                <FormControl className="app__dropdown">
                  <Select
                    style={{ height: "30px" }}
                    variant="outlined"
                    value={currency}
                    onChange={onCurrencyChange}
                  >
                    {currencies.map((currency) => (
                      <MenuItem value={currency}>{currency}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </h3>
            </div>
          </div>
          <div className="lp-campaign-content">
            <div className="lp-cc-title">
              Mission: Raise Funds
              <FormControl className="app__dropdown">
                <Select
                  style={{ height: "30px" }}
                  variant="outlined"
                  value={currency}
                  onChange={onCurrencyChange}
                >
                  {currencies.map((currency) => (
                    <MenuItem value={currency}>{currency}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <p></p>
            <div className="progress-wrapper">
              <div className="progress-stats upper-stats">
                <strong>₹ 140000</strong>
                <span>Raised</span>
              </div>
              <div className="progress-bar">
                <div style={{ width: "70%" }} className="bar"></div>
              </div>
              <div className="lp-cc-donation-option">
                <label className="active">
                  {currency}&emsp;
                  {Math.round(5.85504803 * convertedValue)}
                </label>
                <label>
                  {currency}&emsp;{Math.round(29.2752401 * convertedValue)}
                </label>
                <label>
                  {currency}&emsp;
                  {Math.round(58.5504803 * convertedValue)}
                </label>
                <label>
                  <input
                    type="number"
                    name="otherAmount"
                    step="250"
                    placeholder="Other Amount"
                  />
                </label>
              </div>
              <div className="progress-stats">
                <span>
                  <CurrencyFormat
                    renderText={(value) => <strong>{value}</strong>}
                    decimalScale={2}
                    value={Math.round(2342.01921 * convertedValue)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={currency + " "}
                  />{" "}
                  Goal
                </span>
              </div>
              <div className="lp-cc-bbar">
                <form>
                  <button
                    type="submit"
                    className="btn-full jsx-548378306"
                    onClick={(e) => history.push("/donate")}
                  >
                    Immunise World
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
