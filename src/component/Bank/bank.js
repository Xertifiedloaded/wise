import React from "react";
import classes from "./bank.module.css";
import key from "../../assets/images/key.svg";
import bank from "../../assets/images/bank.svg";
import { FaPiggyBank } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
const Bank = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.flexItem}>
          <span className={classes.span}>
            <img src={bank} alt="" />
          </span>
          <p>We're regulated by the National Bank of Belgium</p>
        </div>
        <div className={classes.flexItem}>
        <span className={classes.span}>
            <img src={key} alt="" />
          </span>
          <p>
            We protect your details through <span>strict standards</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Bank;
