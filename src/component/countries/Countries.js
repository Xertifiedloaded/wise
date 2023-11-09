import React from 'react'
import classes from './countries.module.css'
import { SetCountry } from '../../constant/country'
const Countries = () => {
    return (
        <>
            <section className={classes.main}>
                <div className={classes.mainText}>
                    <h2>Wise works nearly everywhere</h2>
                    <button>
                        send money
                    </button>
                    <div className={classes.country}>
                        {SetCountry.map((item, id) => {
                            return (
                                <div className={classes.box}>
                                    <div className={classes.countryContainer}>
                                        <img src={item.logo} alt="" />
                                    </div>
                                    <p>{item.country}</p>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default Countries