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
  const [dropDown, setDropDown] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const SetMobileWidth = () => {
      setMobileScreen(window.innerWidth);
    };
    window.addEventListener("resize", SetMobileWidth);
    if (active && MobileScreen < 600) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });
  const setActiveOpen = () => {
    setOpen(!open);
  };
  const setToggler = () => {
    setActive(!active);
  };
  const setActiveDropDown = (nav) => {
    setDropDown(nav.id === 3);
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.main}>
          <div className={classes.logo}>
            <Link to={'/'}>
              <img src={Logo} alt="wise" />
            </Link>
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
                {NavMenu.map((nav, idx) => {
                  return (
                    <Link to={nav.link} className={classes.anchor}>
                      <ul>
                        <li>
                          <span
                            className={`spanBox${classes.spann}`}
                            onClick={() => {
                              setToggler();
                            }}
                          >
                            {nav.title}
                            <img
                              onClick={() => {
                                setActiveDropDown(nav);
                                setActiveOpen();
                              }}
                              src={nav.arrow}
                              alt=""
                            />
                          </span>
                        </li>
                      </ul>
                      {open && dropDown ? (
                        <ul
                          className={classes.dropDown}
                          style={{
                            border: nav.border,
                            boxSizing: "content-box",
                          }}
                        >
                          {nav.country?.map((items, id) => {
                            return (
                              <li className={classes.dropList} items={items}>
                                <span>{items.local}</span>
                                <div className={classes.countryImg2}>
                                  <img src={items.countryIcon} alt="" />
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
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
