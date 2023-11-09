import React from "react";
import classes from "./footer.module.css";
import wiseApp from "../../../assets/images/logo.svg";
import {
  footerList,
  footerList2,
  footerList3,
  navIcon,
} from "../../../constant/footerList";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className={classes.mainContent}>
        <div className={classes.main}>
          <div className={classes.footerMenu}>
            {footerList.map((item, id) => {
              return (
                <div className={classes.footerList}>
                  <legend>{item.heading}</legend>
                  <ul>
                    <Link>
                      <li>{item.name}</li>
                    </Link>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={classes.footerMenu}>
            {footerList2.map((item, id) => {
              return (
                <div className={classes.footerList}>
                  <legend>{item.heading}</legend>
                  <ul>
                    <Link>
                      <li>{item.name}</li>
                    </Link>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={classes.footerMenu}>
            {footerList3.map((item, idx) => {
              return (
                <div className={classes.footerList}>
                  <legend>{item.heading}</legend>
                  <ul>
                    <Link>
                      <li>{item.name}</li>
                    </Link>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={classes.footerI}>
            <legend>Follow us</legend>
            <div className={classes.footerIcon}>
              {navIcon.map((item) => {
                return (
                  <div className={classes.footerListIcon}>
                    <img src={item.logo} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={classes.footerLogo}>
          <div>
            <img src={wiseApp} alt="" />
          </div>
          <div className={classes.legal}>
            <ul>
              <Link>
                <li>Legal</li>
              </Link>
              <Link>
                <li>Complaints</li>
              </Link>
            </ul>
          </div>
          <div className={classes.legal}>
            <ul>
              <Link>
                <li>Privacy policy</li>
              </Link>
              <Link>
                <li>Country site map</li>
              </Link>
            </ul>
          </div>
          <div className={classes.legal}>
            <ul>
              <Link>
                <li>Cookie Policy</li>
              </Link>
              <Link>
                <li>Modern slavery statement</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
