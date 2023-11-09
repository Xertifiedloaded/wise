import React from 'react'
import classes from './register.module.css'
import Logo from '../../assets/images/logo.svg'
const Register = () => {
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
              <span>
                Sign in here
              </span>
            </p>
            <button>
              Sign in with Google
            </button>
          </div>
          <form action="" className={classes.form}>
            <div className={classes.formInput}>
              <legend>email address</legend>
              <div className={classes.inputContainer}>
                <input type="text" placeholder='Enter a valid Email Address here' />
              </div>
            </div>
            <div className={classes.formInput}>
              <legend>Surname</legend>
              <div className={classes.inputContainer}>
                <input type="text" placeholder='Provide your Surname' />
              </div>
            </div>
            <div className={classes.formInput}>
              <legend>Lastname</legend>
              <div className={classes.inputContainer}>
                <input type="text" placeholder='Provide your LastName' />
              </div>
            </div>
            <div className={classes.formInput}>
              <legend>Phone Number</legend>
              <div className={classes.inputContainer}>
                <input type="number" placeholder='Provide your Phone Number' />
              </div>
              <div className={classes.formInput}>
                <legend>Address</legend>
              </div>
              <div className={classes.inputContainer}>
                <input type="text" placeholder='Provide a valid Address' />
              </div>
            </div>
            <div className={classes.formInput}>
              <legend>Display Image (Optional)</legend>
              <div className={classes.inputContainer}>
                <input type="file" placeholder='Display Image' />
              </div>
            </div>
            <div className={classes.formInput}>
              <legend>Password</legend>
              <div className={classes.inputContainer}>
                <input type="password" placeholder='Enter your password' />
              </div>
            </div>
            <div className={classes.formInput}>
              <legend>Confirm your Password</legend>
              <div className={classes.inputContainer}>
                <input type="password" placeholder='Enter your password' />
              </div>
            </div>
            <div className={classes.checkBox}>
              <input type="checkbox" style={{ color: "yellow" }} />
              <span> Agree to the Terms and conditions.</span>
            </div>
            <div className={classes.submitBtn}>
              <button>
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