import React, { useEffect } from "react";
import classes from "./converter.module.css";
import error from "../../assets/images/error.svg";
import { useState } from "react";
import axios from "axios";
import { SetCountry } from "../../constant/country";
import CurrencyRow from "../CurrencyRow/currencyRow";
const Converter = () => {
  const API_KEY = "63a292467dmshea0e6ca9920df20p145d1cjsnf28f9695f474";
  const BASE_URL =
    "https://currency-converter5.p.rapidapi.com/currency/convert";
  const [rate, setRate] = useState([]);
  const [currencyOption, setCurrencyOption] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount,setAmount]=useState(1)
  const [exchangeRate,setExchangeRate]=useState()
  const [amountFromCurrency,setAmountInFromCurrency]=useState(true)



  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "63a292467dmshea0e6ca9920df20p145d1cjsnf28f9695f474",
        "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
      },
    };
    fetch(BASE_URL, options)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOption([
          data.base_currency_code,
          ...Object.keys(data.rates),
        ]);
        setFromCurrency(data.base_currency_code);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency])
      });
  }, []);
  // const onChangeCurrency = (e) => {
  //   setToCurrency(e.target.value);
  // };
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
          <CurrencyRow
            currencyOption={currencyOption}
            selectedCurrency={fromCurrency}
            onChangeCurrency={e=>setFromCurrency(e.target.value)}
          />

          <div className={classes.receive}>
            <p>You send exactly</p>
            <CurrencyRow
            onChangeCurrency={e=>setToCurrency(e.target.value)}
              currencyOption={currencyOption}
              selectedCurrency={toCurrency}
            />
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

// fca_live_OR4mCIaoIQ5F1SOZxALtLCfqdpUNMFGdVlxCFRLu
// "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_OR4mCIaoIQ5F1SOZxALtLCfqdpUNMFGdVlxCFRLu"
