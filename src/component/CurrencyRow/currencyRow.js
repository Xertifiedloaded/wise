import React from 'react'
import classes from './currencyRow.module.css'
export default function CurrencyRow({ currencyOption, selectedCurrency, onChangeCurrency }) {
    return (
        <>
            <div className={classes.main}>
                <input type="number" className={classes.mainInput} />
                <select value={selectedCurrency} onChange={onChangeCurrency} name="" id="">
                   {
                    currencyOption.map((option)=>(
                        <option value={option}>{option}</option>
                    ))
                   }
                 
                </select>
            </div>
        </>
    )
}

// rfc shortcut