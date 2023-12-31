import React from "react";
import { Link } from "react-router-dom";
import { footerStyle } from "./style";
import siteLogo from "../../assets/images/site-logo.png";

const Footer = () => {
  const classes = footerStyle();
  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div className="text-center">
              <div className="footer-logo">
                <Link to="/" title="logo">
                  <img src={siteLogo} alt="sitelogo" />
                </Link>
              </div>
              <p className="copyright-text">
                © Mayur Chitaliya
                📧 :mayurchitaliya2003@gmail.com
                ☎️ :6352067497

              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
