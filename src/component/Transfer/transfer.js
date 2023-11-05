import React from "react";
import classes from "./transfer.module.css";
import wise from "../../assets/images/wise-phone.jpg";
import wiseWoman from '../../assets/images/wisecouple.jpg'
const Transfer = () => {
    return (
        <>
            <div className={classes.main}>
                <div className={classes.heading}>
                    <h1>Meet money without borders</h1>
                    <div className={classes.para}>
                        <p>
                            Our dream is for people to live and work anywhere seamlessly. That
                            means money without borders: moving it instantly, transparently,
                            conveniently, and — eventually — for free.
                        </p>
                    </div>
                    <div className={classes.wisePhone}>
                        <img src={wise} alt="" />

                    </div>
                    <div className={classes.learn}>
                        <div className={classes.learnContent}>
                            <p>The Wise account is the universal way for you to manage money internationally. It's made for the world. And it's built to save your money and time, so you can do more of the things you love.</p>
                        </div>

                        <button>
                            learn about our mission
                        </button>

                    </div>
                    <div className={classes.ManWoman}>
                        <div className={classes.container}>
                            <img src={wiseWoman} alt="" />
                        </div>
                        <div className={classes.manContent}>
                            <h2>
                                Believe in an open world
                            </h2>
                            <p>The world is richer when money has no borders. Your ideas fuel the Mission Roadmap that's getting us there — tell us what you want to see.</p>
                            <button>
                                Check our Mission Roadmap
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Transfer;
