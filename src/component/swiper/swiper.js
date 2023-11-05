import React from "react";
import classes from "./swiper.module.css";
import usa from "../../assets/images/usa.svg";
import { SwiperCard } from "../../constant/swiperCard";
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";
const Swiper = () => {
  const getBox = () => {
    return document.querySelector(".box");
  };
  const next = () => {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const prev = () => {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <>
      <div className={classes.main}>
        <div className={classes.text}>
          <h1>For people going places</h1>
          <div className={classes.control}>
            <div onClick={next} className={classes.left}>
              <img src={left} alt="" />
            </div>
            <div onClick={prev} className={classes.right}>
              <img src={right} alt="" />
            </div>
          </div>
        </div>
        <div className={`box ${classes.card}`}>
          {SwiperCard.map((items, index) => {
            return (
              <div className={classes.cards}>
                <div className={classes.imgCont}>
                  <img src={items.image} alt="" />
                </div>
                <div className={classes.quote}>
                  <p>{items.content}</p>
                </div>
                <button className={classes.cardBtn2}>
                  {items.buttonContent}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Swiper;
