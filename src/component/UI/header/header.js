import React, { useEffect, useState } from "react";
import classes from "./header.module.css";
import Logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Hamburger from "../../../assets/images/hamburger.svg";
import Close from "../../../assets/images/close.svg";
import { NavMenu } from "../../../constant/navConstant";
const Header = () => {
  const [active, setActive] = useState(false);
  const [MobileScreen, setMobileScreen] = useState(window.innerWidth);
  useEffect(() => {
    const SetMobileWidth = () => {
      setMobileScreen(window.innerWidth);
    };
    window.addEventListener("resize", SetMobileWidth);
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });
  const setToggler = () => {
    setActive(!active);
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.main}>
          <div className={classes.logo}>
            <img src={Logo} alt="wise" />
          </div>
          <div className={classes.mobile} onClick={setToggler}>
            {active ? (
              <img src={Close} alt="" />
            ) : (
              <img src={Hamburger} alt="" />
            )}
          </div>
          {(active || MobileScreen > 600) && (
            <nav className={classes.nav}>
              <div className={classes.btnContainer}>
                <button>personal</button>
              </div>
              <div className={classes.link}>
                {NavMenu.map((nav, index) => {
                  return (
                    <Link
                      onClick={setToggler}
                      key={index}
                      className={classes.anchor}
                    >
                      <span> {nav.title}</span>
                      <div className={classes.countryImg}>
                        <img src={nav.Country} alt="" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
