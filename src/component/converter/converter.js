import React, { useEffect } from "react";
import classes from "./converter.module.css";
import error from "../../assets/images/error.svg";
import { useState } from "react";
import axios from "axios";
const Converter = () => {
  const BASE_URL = " https://v6.exchangerate-api.com/v6/de16fecd1215e6062d2dd99b/latest/USD";

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
      setRate(response);
      console.log(response.data);
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
              <option value=""> GBP</option>
              <option value=""> NGN</option>
              <option value="">FRA</option>
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
              <input type="text" /> <span>NGN</span>
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
      </div>;
    </>
  );
};

export default Converter;
