import React, { useEffect } from "react";
import classes from "./converter.module.css";
import error from "../../assets/images/error.svg";
import { useState } from "react";
import axios from "axios";
import { SetCountry } from "../../constant/country";
const Converter = () => {
  const BASE_URL =
    "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_tyD4isWnZmog9Aj8zj4hm259lkRrTW3Ddw22GXOm";

  const [rate, setRate] = useState([]);
  const setCurrency = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: BASE_URL,
        headers: {
          "content-type": "application/json",
        },
      });
      setRate(response.data);
      console.log(rate);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setCurrency();
  }, []);
  return (
    <>
      <div className={classes.converterMenu}>
        <div className={classes.content}>
          <h2>Save up to 9x when sending money abroad</h2>
          <p>
            Sending money shouldn't cost the earth, so we built Wise to save you
            money when you transfer and exchange internationally. We charge as
            little as possible: right now a tiny fee, eventually free.
          </p>
        </div>
        <div className={classes.converter}>
          <p>You send exactly</p>
          <div className={classes.input}>
            <input type="text" />
            <select name="" id="">
              {SetCountry.map((Currency, index) => {
                return (
                  <option value="">
                    <span>{Currency.BaseCode}</span>
                  </option>

                );
              })}
            </select>
          </div>
          <div className={classes.fee}>
            <div className={classes.rate}>
              <div className={classes.flex}>
                <span>-</span>
                <span>6.38GBP</span>
              </div>
              <p>Low cost transfer fee</p>
            </div>
          </div>
          <div className={classes.rate}>
            <div className={classes.flex}>
              <span>=</span>
              <span>993.87 GBP</span>
            </div>
            <p>Total amount we’ll convert</p>
          </div>
          <div className={classes.rate}>
            <div className={classes.flex}>
              <span>-</span>
              <span>980.661 GBP</span>
            </div>
            <p>Guaranteed rate (41h)</p>
          </div>
          <div className={classes.receive}>
            <p>You send exactly</p>
            <div className={classes.input}>
              <input type="text" /> <span></span>
              <select name="" id="">
                {SetCountry.map((Currency, index) => {
                  return (
                    <option value="">
                      <span>{Currency.BaseCode}</span>
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={classes.msg}>
            <img src={error} alt="" />
            <p>
              Sorry, we have stopped offering transfers to Nigeria. Naira
              payments are no longer permitted by the Central Bank of Nigeria.
            </p>
          </div>
          <div className={classes.submit}>
            <button>Get started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Converter;
