import React from "react";
import classes from "./hero.module.css";
const hero = () => {
  return (
    <>
      <div className={classes.main}>
        <h1>Save when you spend worldwide</h1>
        <p>
          Get your money moving internationally. Save <br />
          up to 9x when you send with Wise.
        </p>
        <div className={classes.heroBtn}>
          <button>send money Now</button>
          <button>Open an account</button>
        </div>
      </div>
      <div className={classes.videoContainer}>
        <video
          src="https://wise-clone.vercel.app/video/3d-globe-72a5cb0edcbe31cf385aa34558b1c435.webm"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </>
  );
};

export default hero;
