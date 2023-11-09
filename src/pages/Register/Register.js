import React, { useState } from 'react'
import classes from './register.module.css'
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { userContextApi } from '../../contextApi/context'
const Register = () => {
  const { payLoad, handleClick, handleSubmit } = useContext(userContextApi)
  return (
    <>
      <main className={classes.register}>
        <div className={classes.main}>
          <div className={classes.mainDetailsContainer}>
            <div className={classes.mainImgContainer}>
              <img src={Logo} alt="" />
            </div>
            <div className={classes.wiseContentDetails}>
              <p>Welcome to Wise</p>
            </div>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div className={classes.googleLogin}>
            <h2>
              Create an Account
            </h2>
            <p>Already have an account?
              <Link to={'/login'} className={classes.spanColor}>
                Sign in here
              </Link>
            </p>
            <button>
              Sign in with Google
            </button>
          </div>
          <form action="" className={classes.form}>
            <div className={classes.formInput}>
              <legend>email address</legend>
              <div className={classes.inputContainer}>
                <input value={payLoad.email} onChange={handleClick} name='email' type="email" placeholder='Enter a valid Email Address here' />
              </div>
            </div>
            <div className={classes.formInput}>
              <legend>Surname</legend>
              <div className={classes.inputContainer}>
                <input value={payLoad.surName} onChange={handleClick} name='surName' type="text" placeholder='Provide your Surname' />
              </div>
            </div>
            <div className={classes.formInput}>
              <legend>Lastname</legend>
              <div className={classes.inputContainer}>
                <input value={payLoad.lastName} onChange={handleClick} name='lastName' type="text" placeholder='Provide your LastName' />
              </div>
            </div>
            <div className={classes.formInput}>
              <legend>Phone Number</legend>
              <div className={classes.inputContainer}>
                <input value={payLoad.phone} onChange={handleClick} name='phone' type="number" placeholder='Provide your Phone Number' />
              </div>
              <div className={classes.formInput}>
                <legend>Address</legend>
              </div>
              <div className={classes.inputContainer}>
                <input value={payLoad.address} onChange={handleClick} name='address' type="text" placeholder='Provide a valid Address' />
              </div>
            </div>
            <div className={classes.formInput}>
              <legend>Display Image <span className={classes.optional}>(Optional)</span></legend>
              <div className={classes.inputContainer}>
                <input value={payLoad.image} onChange={handleClick} name='image' type="file" placeholder='Display Image' />
              </div>
            </div>
            <div className={classes.formInput}>
              <legend>Password</legend>
              <div className={classes.inputContainer}>
                <input value={payLoad.password} onChange={handleClick} name='password' type="password" placeholder='Enter your password' />
              </div>
            </div>
            <div className={classes.formInput}>
              <legend>Confirm your Password</legend>
              <div className={classes.inputContainer}>
                <input value={payLoad.verifyPassword} onChange={handleClick} name='verifyPassword' type="password" placeholder='Enter your password' />
              </div>
            </div>
            <div className={classes.checkBox}>
              <input value={null} name='checkBox' type="checkBox" style={{ color: "yellow" }} />
              <span> Agree to the <span className={classes.terms}>Terms and conditions.</span></span>
            </div>
            <div onChange={handleClick} className={classes.submitBtn}>
              <button onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Register