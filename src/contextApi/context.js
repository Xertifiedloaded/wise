import React, { useState } from 'react'
import { createContext } from 'react'
export const userContextApi = createContext()
const ContextApi = ({ children }) => {
    const [payLoad, setPayload] = useState({
        email: '',
        password: '',
        lastName: '',
        surName: '',
        checkBox: '',
        phone: '',
        address: '',
        image: '',
        verifyPassword: '',
    })
    const handleClick = (e) => {
        setPayload((data) => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(payLoad)

    }
    const value = {
        payLoad,
        handleSubmit,
        handleClick
    }
    return (
        <userContextApi.Provider value={value}>
            {children}
        </userContextApi.Provider>
    )
}

export default ContextApi;