import React from 'react'
import classes from './money.module.css'
import padlock from '../../assets/images/lock-large@1x.webp'
import { BankIcon } from '../../constant/swiperCard'
const Money = () => {
    return (
        <>
            <div className={classes.mainSection}>
                <main className={classes.main}>
                    <div className={classes.flexItems}>
                        <div className={classes.text}>
                            <h2>
                                Disappoint thieves
                            </h2>
                            <p>Every month, our customers trust us to move around £9 billion of their money. Here are some of the important ways we protect them.</p>
                            <button>
                                How we keep your money safe
                            </button>
                        </div>
                        <div className={classes.key}>
                            <img src={padlock} alt="" />
                        </div>
                    </div>
                    <section className={classes.mapSection}>
                        <div className={classes.flexMap}>
                            {
                                BankIcon.map((item, idx) => {
                                    return (
                                        <div className={classes.container1}>
                                            <div className={classes.container1Img}>
                                                <img src={item.keyNote} alt="" />
                                            </div>
                                            <p>{item.text}</p>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </section>
                </main>

            </div>
        </>
    )
}

export default Money;
